from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.routers import health, vessels, bookings

app = FastAPI(
    title="SailBorne API",
    description="Backend API for SailBorne luxury yacht charters",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS — allow requests from the Vercel frontend
origins = [settings.frontend_url] if settings.frontend_url != "*" else ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

app.include_router(health.router,   prefix="/health",   tags=["health"])
app.include_router(vessels.router,  prefix="/vessels",  tags=["vessels"])
app.include_router(bookings.router, prefix="/bookings", tags=["bookings"])
