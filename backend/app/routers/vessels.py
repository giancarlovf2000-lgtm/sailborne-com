from fastapi import APIRouter, HTTPException, Query
from typing import Optional
from app.core.supabase import get_client
from app.models.vessel import Vessel

router = APIRouter()

VALID_DESTINATIONS = {"fajardo", "parguera", "miami", "greece"}


@router.get("", response_model=list[Vessel])
async def list_vessels(destination: Optional[str] = Query(None)):
    client = get_client()
    query = client.table("vessels").select("*").order("display_order")
    if destination:
        if destination not in VALID_DESTINATIONS:
            raise HTTPException(status_code=400, detail=f"Invalid destination. Choose from: {', '.join(VALID_DESTINATIONS)}")
        query = query.eq("destination", destination)
    result = query.execute()
    return result.data


@router.get("/{vessel_id}", response_model=Vessel)
async def get_vessel(vessel_id: str):
    client = get_client()
    result = client.table("vessels").select("*").eq("id", vessel_id).single().execute()
    if not result.data:
        raise HTTPException(status_code=404, detail="Vessel not found")
    return result.data
