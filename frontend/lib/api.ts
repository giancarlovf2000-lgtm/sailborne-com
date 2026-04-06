import type { Vessel, BookingPayload } from '@/types'

const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000'

export async function getVessels(destination?: string): Promise<Vessel[]> {
  const url = destination
    ? `${API}/vessels?destination=${destination}`
    : `${API}/vessels`
  const res = await fetch(url, { next: { revalidate: 300 } })
  if (!res.ok) throw new Error('Failed to fetch vessels')
  return res.json()
}

export async function submitBooking(data: BookingPayload): Promise<{ id: string }> {
  const res = await fetch(`${API}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.detail ?? 'Failed to submit booking')
  }
  return res.json()
}
