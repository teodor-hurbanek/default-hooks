import React, { useEffect, useRef } from 'react'
import { MapWidget } from '@/utils/map-widget'

interface MapProps {
  zoomLevel: number
  className: string
}

const Map = ({ zoomLevel, className }: MapProps) => {
  const containerRef = useRef(null)
  const mapRef = useRef<MapWidget | null>(null)

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current as unknown as HTMLElement)
    }

    const map = mapRef.current
    map.setZoom(zoomLevel)
  }, [zoomLevel])

  return <div className={className} ref={containerRef} />
}

export default Map
