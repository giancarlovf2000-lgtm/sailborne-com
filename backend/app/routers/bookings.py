from fastapi import APIRouter, HTTPException, status
from app.core.supabase import get_client
from app.models.booking import BookingCreate, BookingResponse

router = APIRouter()


@router.post("", response_model=BookingResponse, status_code=status.HTTP_201_CREATED)
async def create_booking(booking: BookingCreate):
    client = get_client()
    payload = booking.model_dump(exclude_none=True)
    result = client.table("bookings").insert(payload).execute()
    if not result.data:
        raise HTTPException(status_code=500, detail="Failed to save booking")
    row = result.data[0]
    return BookingResponse(id=row["id"], status=row.get("status", "new"))
