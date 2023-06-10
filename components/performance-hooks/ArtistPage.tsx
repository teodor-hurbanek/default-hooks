import { Suspense } from 'react'
// import Albums from './Albums.js';
// import Biography from './Biography.js';
// import Panel from './Panel.js';

interface ArtistPageProps {
  artist: { id: string; name: string }
}

export default function ArtistPage({ artist }: ArtistPageProps) {
  return (
    <>
      <h1>{artist.name}</h1>
      <Biography artistId={artist.id} />
      <Suspense fallback={<AlbumsGlimmer />}>
        <Panel>
          <Albums artistId={artist.id} />
        </Panel>
      </Suspense>
    </>
  )
}

function AlbumsGlimmer() {
  return (
    <div className="glimmer-panel">
      <div className="glimmer-line" />
      <div className="glimmer-line" />
      <div className="glimmer-line" />
    </div>
  )
}

function Albums({ artistId }: any) {
  return <p>{artistId}</p>
}
function Biography({ artistId }: any) {
  return <p>{artistId}</p>
}
function Panel({ children }: any) {
  return <div>{children}</div>
}
