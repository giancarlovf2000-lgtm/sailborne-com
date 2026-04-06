'use client'

import { useState, useCallback } from 'react'
import { submitBooking } from '@/lib/api'
import Toast from '@/components/ui/Toast'
import type { BookingPayload } from '@/types'

const PR_DESTINATIONS = ['Fajardo', 'La Parguera', 'Culebra', 'Vieques', 'Cayo Icacos']
const ADDONS = ['Catering & Gourmet Meals', 'Water Sports Equipment', 'Photography / Videography', 'Live Music', 'Floral Arrangements', 'Concierge & Transportation']

const initialState: BookingPayload = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  inquiry_type: '',
  location: '',
  vessel: '',
  duration: '',
  preferred_date: '',
  guests: '',
  pr_destinations: [],
  addons: [],
  message: '',
}

export default function BookingForm() {
  const [form, setForm] = useState<BookingPayload>(initialState)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const clearToast = useCallback(() => setToast(null), [])

  const set = (field: keyof BookingPayload, value: string) =>
    setForm(f => ({ ...f, [field]: value }))

  const toggleMulti = (field: 'pr_destinations' | 'addons', value: string) =>
    setForm(f => {
      const arr = (f[field] as string[]) ?? []
      return { ...f, [field]: arr.includes(value) ? arr.filter(x => x !== value) : [...arr, value] }
    })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await submitBooking(form)
      setToast({ message: 'Your inquiry has been received! We\'ll be in touch within 24 hours.', type: 'success' })
      setForm(initialState)
    } catch {
      setToast({ message: 'Something went wrong. Please try again or email us directly.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const isPR = form.location === 'Puerto Rico'

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={clearToast} />}

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <div className="booking-form__section">
          <h3 className="booking-form__section-title">Contact Information</h3>
          <div className="booking-form__row">
            <div className="form-group">
              <label className="form-label" htmlFor="first_name">First Name <span aria-hidden="true">*</span></label>
              <input
                id="first_name"
                type="text"
                className="form-input"
                value={form.first_name}
                onChange={e => set('first_name', e.target.value)}
                required
                autoComplete="given-name"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="last_name">Last Name <span aria-hidden="true">*</span></label>
              <input
                id="last_name"
                type="text"
                className="form-input"
                value={form.last_name}
                onChange={e => set('last_name', e.target.value)}
                required
                autoComplete="family-name"
              />
            </div>
          </div>
          <div className="booking-form__row">
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
              <input
                id="email"
                type="email"
                className="form-input"
                value={form.email}
                onChange={e => set('email', e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                className="form-input"
                value={form.phone}
                onChange={e => set('phone', e.target.value)}
                autoComplete="tel"
              />
            </div>
          </div>
        </div>

        <div className="booking-form__section">
          <h3 className="booking-form__section-title">Charter Details</h3>
          <div className="booking-form__row">
            <div className="form-group">
              <label className="form-label" htmlFor="inquiry_type">Type of Inquiry <span aria-hidden="true">*</span></label>
              <select
                id="inquiry_type"
                className="form-select"
                value={form.inquiry_type}
                onChange={e => set('inquiry_type', e.target.value)}
                required
              >
                <option value="">Select inquiry type</option>
                <option>Yacht Charter</option>
                <option>Day Trip</option>
                <option>Corporate Event</option>
                <option>Wedding / Special Event</option>
                <option>Photography / Film Shoot</option>
                <option>Studio Services</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="location">Destination <span aria-hidden="true">*</span></label>
              <select
                id="location"
                className="form-select"
                value={form.location}
                onChange={e => set('location', e.target.value)}
                required
              >
                <option value="">Select destination</option>
                <option>Puerto Rico</option>
                <option>Miami</option>
                <option>Greece</option>
                <option>Custom / Other</option>
              </select>
            </div>
          </div>

          {isPR && (
            <div className="form-group">
              <label className="form-label">Puerto Rico Areas of Interest</label>
              <div className="form-checkboxes">
                {PR_DESTINATIONS.map(d => (
                  <label key={d} className="form-checkbox">
                    <input
                      type="checkbox"
                      checked={(form.pr_destinations ?? []).includes(d)}
                      onChange={() => toggleMulti('pr_destinations', d)}
                    />
                    <span>{d}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="booking-form__row">
            <div className="form-group">
              <label className="form-label" htmlFor="duration">Charter Duration</label>
              <select
                id="duration"
                className="form-select"
                value={form.duration}
                onChange={e => set('duration', e.target.value)}
              >
                <option value="">Select duration</option>
                <option>Half Day (4 hrs)</option>
                <option>Full Day (8 hrs)</option>
                <option>2 Days</option>
                <option>3–4 Days</option>
                <option>1 Week</option>
                <option>2+ Weeks</option>
                <option>Custom</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="guests">Number of Guests</label>
              <select
                id="guests"
                className="form-select"
                value={form.guests}
                onChange={e => set('guests', e.target.value)}
              >
                <option value="">Select guests</option>
                <option>1–4</option>
                <option>5–8</option>
                <option>9–12</option>
                <option>13–20</option>
                <option>21–50</option>
                <option>50+</option>
              </select>
            </div>
          </div>

          <div className="booking-form__row">
            <div className="form-group">
              <label className="form-label" htmlFor="preferred_date">Preferred Date</label>
              <input
                id="preferred_date"
                type="date"
                className="form-input"
                value={form.preferred_date}
                onChange={e => set('preferred_date', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="vessel">Vessel Preference</label>
              <input
                id="vessel"
                type="text"
                className="form-input"
                placeholder="e.g. Catamaran, Sailing Yacht, or specific name"
                value={form.vessel}
                onChange={e => set('vessel', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="booking-form__section">
          <h3 className="booking-form__section-title">Add-On Services</h3>
          <div className="form-checkboxes form-checkboxes--grid">
            {ADDONS.map(addon => (
              <label key={addon} className="form-checkbox">
                <input
                  type="checkbox"
                  checked={(form.addons ?? []).includes(addon)}
                  onChange={() => toggleMulti('addons', addon)}
                />
                <span>{addon}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="booking-form__section">
          <div className="form-group">
            <label className="form-label" htmlFor="message">Additional Notes</label>
            <textarea
              id="message"
              className="form-textarea"
              rows={4}
              placeholder="Tell us about your vision, any special requests, dietary requirements, or questions..."
              value={form.message}
              onChange={e => set('message', e.target.value)}
            />
          </div>
        </div>

        <div className="booking-form__submit">
          <button type="submit" className="btn btn--primary btn--lg" disabled={loading}>
            {loading ? 'Sending…' : 'Send Inquiry'}
          </button>
          <p className="booking-form__note">We respond within 24 hours. No commitment required.</p>
        </div>
      </form>
    </>
  )
}
