'use client';

export default function LaptopMockup() {
  return (
    <div className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]" style={{ animation: 'float 5s ease-in-out infinite' }}>
      {/* Screen outer */}
      <div
        className="rounded-t-2xl border-[3px] pb-0"
        style={{
          background: '#1a1a2e',
          borderColor: '#2a2a4a',
          borderBottomWidth: 0,
          padding: '6px 6px 0',
          boxShadow: '0 0 60px rgba(109,40,217,0.3), 0 0 120px rgba(109,40,217,0.15), inset 0 0 20px rgba(109,40,217,0.1)',
          position: 'relative',
        }}
      >
        {/* Notch */}
        <div
          style={{
            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
            width: '60px', height: '4px',
            background: '#2a2a4a', borderRadius: '0 0 6px 6px', zIndex: 2,
          }}
        />
        {/* Screen */}
        <div
          className="w-full overflow-hidden"
          style={{ aspectRatio: '16/10', borderRadius: '8px', background: '#09090F', position: 'relative' }}
        >
          {/* Mini site content */}
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', fontSize: 'clamp(4px, 0.7vw, 8px)' }}>
            {/* Mini nav */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '4px 8px', borderBottom: '1px solid rgba(109,40,217,0.2)',
              background: 'rgba(9,9,15,0.9)',
            }}>
              <span style={{ fontWeight: 800, color: '#A855F7', letterSpacing: '0.06em', fontSize: '1.1em', textTransform: 'uppercase' }}>
                OLP
              </span>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['About', 'Units', 'Contact'].map(link => (
                  <span key={link} style={{ color: 'rgba(215,226,234,0.5)', fontSize: '0.8em' }}>{link}</span>
                ))}
              </div>
            </div>
            {/* Mini hero area */}
            <div style={{
              flex: 1, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(45,27,105,0.16), transparent 70%)',
              padding: '6px', gap: '3px',
            }}>
              <div style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', fontSize: '2.2em', lineHeight: 0.95, color: '#BBCCD7' }}>
                ONE LANCASTER
              </div>
              <div style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', fontSize: '2.2em', lineHeight: 0.95, color: '#A855F7' }}>
                PARK
              </div>
              <div style={{ color: 'rgba(196,181,253,0.5)', fontSize: '0.75em', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Preselling Now · Sta. Rosa, Laguna
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3px' }}>
                <span style={{
                  background: 'linear-gradient(123deg, #18011F, #B600A8, #7621B0)',
                  color: '#fff', padding: '2px 8px', borderRadius: '20px',
                  fontSize: '0.7em', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  Inquire Now
                </span>
              </div>
            </div>
            {/* Mini card row */}
            <div style={{ display: 'flex', gap: '3px', padding: '4px 6px' }}>
              {['Studio', '1BR', '2BR'].map(unit => (
                <div key={unit} style={{
                  flex: 1, borderRadius: '5px', border: '1px solid rgba(109,40,217,0.25)',
                  background: '#0D0A1A', height: 'clamp(16px, 3vw, 32px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#7C3AED', fontSize: '0.6em', textTransform: 'uppercase', letterSpacing: '0.06em',
                }}>
                  {unit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Hinge */}
      <div style={{
        height: '4px',
        background: 'linear-gradient(90deg, #1a1a2e, #2a2a4a, #1a1a2e)',
      }} />
      {/* Base */}
      <div style={{
        background: 'linear-gradient(180deg, #1e1e32 0%, #141428 100%)',
        border: '3px solid #2a2a4a',
        borderTop: 'none',
        borderRadius: '0 0 12px 12px',
        height: 'clamp(14px, 2vw, 22px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ width: '15%', height: '3px', borderRadius: '3px', background: 'rgba(109,40,217,0.3)' }} />
      </div>
      {/* Glow shadow */}
      <div style={{
        width: '80%', height: '16px', margin: '0 auto',
        background: 'radial-gradient(ellipse, rgba(109,40,217,0.4) 0%, transparent 70%)',
        filter: 'blur(8px)',
        transform: 'scaleY(0.4)',
      }} />
    </div>
  );
}
