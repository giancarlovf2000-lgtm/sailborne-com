from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class Vessel(BaseModel):
    id: str
    created_at: datetime
    name: str
    type: str
    destination: str          # 'fajardo' | 'parguera' | 'miami' | 'greece'
    length_ft: Optional[int] = None
    capacity: Optional[int] = None
    cabins: Optional[int] = None
    price_from: Optional[float] = None
    price_unit: Optional[str] = None  # 'day' | 'week' | 'event'
    price_contact: bool = False
    image_url: Optional[str] = None
    featured: bool = False
    display_order: int = 0
