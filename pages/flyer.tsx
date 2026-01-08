import Head from 'next/head'
import { useEffect, useState } from 'react'
import QRCode from 'qrcode'

export default function Flyer() {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('')

  useEffect(() => {
    QRCode.toDataURL('https://dillontutors.com', {
      width: 400,
      margin: 2,
    }).then(setQrCodeDataUrl)
  }, [])

  return (
    <>
      <Head>
        <title>Flyer - Dillon Grannis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          @media print {
            @page {
              size: letter portrait;
              margin: 0.4in;
            }
            body { 
              margin: 0; 
              padding: 0;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
              background: white !important;
            }
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            div, p, h1, h2, h3, span, strong, li {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            [style*="background"] {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            [style*="color"] {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            .flyer-container {
              max-width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
            }
          }
        `}</style>
      </Head>
      <div style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: 'white',
        color: '#1e3a8a',
        padding: 0,
        lineHeight: 1.4,
        maxWidth: '8.5in',
        margin: '0 auto',
      }} className="flyer-container">
        {/* Navbar */}
        <div style={{
          background: 'linear-gradient(to bottom, #1e40af, #1e3a8a)',
          padding: '8px 20px',
          marginBottom: '10px',
          borderRadius: '15px',
        }}>
          <h2 style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '1px',
            margin: 0,
          }}>Dillon Grannis Math Tutoring</h2>
        </div>

        <div style={{ padding: '0 20px 15px' }}>
          {/* Title */}
          <h1 style={{
            fontSize: '32px',
            fontWeight: 600,
            textAlign: 'center',
            color: '#1e3a8a',
            marginBottom: '6px',
            letterSpacing: '-0.5px',
          }}>Level Up Your Math</h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '15px',
            textAlign: 'center',
            color: '#4b5563',
            marginBottom: '10px',
          }}>Whether struggling or excelling, I can take your math to the next level with 1-1 virtual tutoring.</p>

          {/* Image */}
          <div style={{
            width: '100%',
            marginBottom: '10px',
            borderRadius: '12px',
            overflow: 'hidden',
          }}>
            <img 
              src="/images/tutoringpic.jpeg" 
              alt="Tutoring"
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '280px', objectFit: 'cover' }}
            />
          </div>

          {/* Qualifications */}
          <div style={{ marginBottom: '12px' }}>
            <h2 style={{
              fontSize: '22px',
              fontWeight: 600,
              textAlign: 'center',
              color: '#1e3a8a',
              marginBottom: '10px',
              borderBottom: '2px solid #1e3a8a',
              paddingBottom: '4px',
            }}>My Qualifications</h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
              marginBottom: '12px',
            }}>
              {/* UT Austin */}
              <div style={{
                background: '#eff6ff',
                borderRadius: '12px',
                padding: '12px',
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#1e3a8a',
                  marginBottom: '4px',
                }}>UT Austin</h3>
                <p style={{
                  fontSize: '11px',
                  color: '#6b7280',
                  marginBottom: '8px',
                }}>#13 nationally in math — US News</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{
                    fontSize: '13px',
                    color: '#374151',
                    marginBottom: '4px',
                    paddingLeft: '16px',
                    position: 'relative',
                  }}>
                    <span style={{
                      color: '#1e3a8a',
                      fontWeight: 'bold',
                      position: 'absolute',
                      left: 0,
                    }}>•</span>
                    I'm a <strong>Math PhD student</strong> here
                  </li>
                  <li style={{
                    fontSize: '13px',
                    color: '#374151',
                    marginBottom: '4px',
                    paddingLeft: '16px',
                    position: 'relative',
                  }}>
                    <span style={{
                      color: '#1e3a8a',
                      fontWeight: 'bold',
                      position: 'absolute',
                      left: 0,
                    }}>•</span>
                    With the prestigious <strong>Provost's Graduate Excellence Fellowship</strong>
                  </li>
                </ul>
              </div>

              {/* UChicago */}
              <div style={{
                background: '#eff6ff',
                borderRadius: '12px',
                padding: '12px',
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#1e3a8a',
                  marginBottom: '4px',
                }}>UChicago</h3>
                <p style={{
                  fontSize: '11px',
                  color: '#6b7280',
                  marginBottom: '8px',
                }}>#6 nationally in math — US News</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{
                    fontSize: '13px',
                    color: '#374151',
                    marginBottom: '4px',
                    paddingLeft: '16px',
                    position: 'relative',
                  }}>
                    <span style={{
                      color: '#1e3a8a',
                      fontWeight: 'bold',
                      position: 'absolute',
                      left: 0,
                    }}>•</span>
                    BA in Mathematics <strong>with Honors (3.9 GPA)</strong> & Economics
                  </li>
                  <li style={{
                    fontSize: '13px',
                    color: '#374151',
                    marginBottom: '4px',
                    paddingLeft: '16px',
                    position: 'relative',
                  }}>
                    <span style={{
                      color: '#1e3a8a',
                      fontWeight: 'bold',
                      position: 'absolute',
                      left: 0,
                    }}>•</span>
                    Minor in Computer Science
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Test Scores */}
          <div style={{
            background: '#eff6ff',
            borderRadius: '12px',
            padding: '10px',
            marginBottom: '12px',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1e3a8a',
              textAlign: 'center',
              marginBottom: '10px',
            }}>High School Test Scores</h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '6px',
            }}>
              {['AP Calculus BC: 5', 'AP Physics 1: 5', 'AP Physics C: 5', 'AP Microeconomics: 5', 'SAT Math: 790'].map((score, i) => (
                <span key={i} style={{
                  background: 'white',
                  padding: '4px 10px',
                  borderRadius: '15px',
                  fontSize: '12px',
                  color: '#374151',
                  border: '1px solid #bfdbfe',
                }}>
                  {score.split(': ')[0]}: <strong style={{ color: '#1e3a8a' }}>{score.split(': ')[1]}</strong>
                </span>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            marginBottom: '12px',
          }}>
            <div style={{
              background: '#eff6ff',
              borderRadius: '12px',
              padding: '12px',
            }}>
              <p style={{
                fontSize: '13px',
                fontStyle: 'italic',
                color: '#374151',
                marginBottom: '6px',
                textAlign: 'center',
              }}>"Dillon is the best math teacher I've ever had"</p>
              <p style={{
                color: '#6b7280',
                textAlign: 'center',
                fontSize: '12px',
              }}>– Hannah</p>
            </div>
            <div style={{
              background: '#eff6ff',
              borderRadius: '12px',
              padding: '12px',
            }}>
              <p style={{
                fontSize: '13px',
                fontStyle: 'italic',
                color: '#374151',
                marginBottom: '6px',
                textAlign: 'center',
              }}>"That's the best that's ever been explained to me"</p>
              <p style={{
                color: '#6b7280',
                textAlign: 'center',
                fontSize: '12px',
              }}>– Anthony</p>
            </div>
          </div>

          {/* Closing line for qualifications */}
          <div style={{
            borderTop: '2px solid #1e3a8a',
            marginBottom: '10px',
            marginTop: '10px',
          }}></div>

          {/* QR Code */}
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '24px',
              fontWeight: 500,
              color: '#1e3a8a',
              marginBottom: '0',
              marginTop: '0',
              lineHeight: '1',
            }}>More Info Here</p>
            {qrCodeDataUrl && (
              <div style={{
                display: 'inline-block',
                background: 'white',
                padding: '5px',
                borderRadius: '8px',
                marginTop: '4px',
              }}>
                <img src={qrCodeDataUrl} alt="QR Code" style={{
                  width: '166px',
                  height: '166px',
                  display: 'block',
                }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
