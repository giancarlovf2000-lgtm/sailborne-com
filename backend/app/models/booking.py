from pydantic import BaseModel, EmailStr, field_validator
from typing import Optional


class BookingCreate(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone: Optional[str] = None
    inquiry_type: Optional[str] = None
    location: Optional[str] = None
    vessel: Optional[str] = None
    duration: Optional[str] = None
    preferred_date: Optional[str] = None
    guests: Optional[str] = None
    pr_destinations: Optional[list[str]] = None
    addons: Optional[list[str]] = None
    message: Optional[str] = None

    @field_validator("first_name", "last_name")
    @classmethod
    def not_empty(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("Field cannot be empty")
        return v.strip()


class BookingResponse(BaseModel):
    id: str
    status: str = "new"
