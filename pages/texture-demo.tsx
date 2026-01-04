import Head from 'next/head'

export default function TextureDemo() {
  return (
    <>
      <Head>
        <title>Navbar Texture Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Navbar Texture Options</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* 1. Noise/Grain */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-center">1. Noise/Grain</h2>
            <div 
              className="h-16 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden flex items-center justify-center"
            >
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />
              <span className="text-white font-semibold relative z-10">Dillon Grannis</span>
            </div>
          </div>

          {/* 2. Dot Pattern */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-center">2. Dot Pattern</h2>
            <div 
              className="h-16 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden flex items-center justify-center"
            >
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '10px 10px',
                }}
              />
              <span className="text-white font-semibold relative z-10">Dillon Grannis</span>
            </div>
          </div>

          {/* 3. Diagonal Lines */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-center">3. Diagonal Lines</h2>
            <div 
              className="h-16 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden flex items-center justify-center"
            >
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 5px, white 5px, white 6px)`,
                }}
              />
              <span className="text-white font-semibold relative z-10">Dillon Grannis</span>
            </div>
          </div>

          {/* 4. Topographic/Contour Lines */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-center">4. Topographic Lines</h2>
            <div 
              className="h-16 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden flex items-center justify-center"
            >
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 30, 50 50 T 100 50' stroke='white' fill='none' stroke-width='1'/%3E%3Cpath d='M0 30 Q 25 10, 50 30 T 100 30' stroke='white' fill='none' stroke-width='1'/%3E%3Cpath d='M0 70 Q 25 50, 50 70 T 100 70' stroke='white' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
                  backgroundSize: '100px 100px',
                }}
              />
              <span className="text-white font-semibold relative z-10">Dillon Grannis</span>
            </div>
          </div>

          {/* 5. Mesh Gradient Spots */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-center">5. Mesh Gradient Spots</h2>
            <div 
              className="h-16 rounded-2xl bg-blue-900 relative overflow-hidden flex items-center justify-center"
            >
              <div 
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
                    radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
                    radial-gradient(circle at 50% 30%, rgba(30, 64, 175, 0.6) 0%, transparent 40%)
                  `,
                }}
              />
              <span className="text-white font-semibold relative z-10">Dillon Grannis</span>
            </div>
          </div>

          {/* 6. Subtle Grid */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-center">6. Subtle Grid</h2>
            <div 
              className="h-16 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden flex items-center justify-center"
            >
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(white 1px, transparent 1px),
                    linear-gradient(90deg, white 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                }}
              />
              <span className="text-white font-semibold relative z-10">Dillon Grannis</span>
            </div>
          </div>

          {/* 7. Fabric/Linen Texture */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-center">7. Fabric/Linen</h2>
            <div 
              className="h-16 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden flex items-center justify-center"
            >
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, transparent 50%, rgba(255,255,255,0.1) 50%),
                    linear-gradient(transparent 50%, rgba(255,255,255,0.1) 50%)
                  `,
                  backgroundSize: '4px 4px',
                }}
              />
              <span className="text-white font-semibold relative z-10">Dillon Grannis</span>
            </div>
          </div>

        </div>

        <p className="text-center text-gray-600 mt-12">
          Visit <a href="/" className="text-blue-900 underline">home</a> to go back
        </p>
      </main>
    </>
  )
}

