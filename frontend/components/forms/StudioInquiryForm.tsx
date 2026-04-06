'use client'

import { useState, useCallback } from 'react'
import { submitBooking } from '@/lib/api'
import Toast from '@/components/ui/Toast'
import type { BookingPayload } from '@/types'

const initialState: BookingPayload = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  inquiry_type: 'Studio Services',
  message: '',
}

export default function StudioInquiryForm() {
  const [form, setForm] = useState<BookingPayload>(initialState)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const clearToast = useCallback(() => setToast(null), [])

  const set = (field: keyof BookingPayload, value: string) =>
    setForm(f => ({ ...f, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await submitBooking(form)
      setToast({ message: 'Thank you! Our creative team will reach out within 24 hours.', type: 'success' })
      setForm(initialState)
    } catch {
      setToast({ message: 'Something went wrong. Please try again or email us directly.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={clearToast} />}
      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <div className="booking-form__row">
          <div className="form-group">
            <label className="form-label" htmlFor="s_first_name">First Name <span aria-hidden="true">*</span></label>
            <input id="s_first_name" type="text" className="form-input" value={form.first_name} onChange={e => set('first_name', e.target.value)} required autoComplete="given-name" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="s_last_name">Last Name <span aria-hidden="true">*</span></label>
            <input id="s_last_name" type="text" className="form-input" value={form.last_name} onChange={e => set('last_name', e.target.value)} required autoComplete="family-name" />
          </div>
        </div>
        <div className="booking-form__row">
          <div className="form-group">
            <label className="form-label" htmlFor="s_email">Email <span aria-hidden="true">*</span></label>
            <input id="s_email" type="email" className="form-input" value={form.email} onChange={e => set('email', e.target.value)} required autoComplete="email" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="s_phone">Phone</label>
            <input id="s_phone" type="tel" className="form-input" value={form.phone} onChange={e => set('phone', e.target.value)} autoComplete="tel" />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="s_service">Service Type <span aria-hidden="true">*</span></label>
          <select id="s_service" className="form-select" value={form.vessel ?? ''} onChange={e => set('vessel', e.target.value)} required>
            <option value="">Select a service</option>
            <option>Photography — Yacht / Lifestyle</option>
            <option>Videography — Brand Film</option>
            <option>Content Creation — Social Media</option>
            <option>Commercial Production</option>
            <option>Full Creative Package</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="s_message">Tell Us About Your Project <span aria-hidden="true">*</span></label>
          <textarea id="s_message" className="form-textarea" rows={5} placeholder="Describe your project, brand, goals, timeline, and any references..." value={form.message} onChange={e => set('message', e.target.value)} required />
        </div>
        <div className="booking-form__submit">
          <button type="submit" className="btn btn--primary btn--lg" disabled={loading}>
            {loading ? 'Sending…' : 'Start the Conversation'}
          </button>
        </div>
      </form>
    </>
  )
}
