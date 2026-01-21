const GridBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft blue tinted base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, hsl(221 83% 96%) 0%, hsl(221 50% 98%) 40%, hsl(221 83% 97%) 100%)`
        }}
      />
      
      {/* Subtle dot pattern for texture */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at center, hsl(221 83% 70% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Large soft gradient blobs */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(ellipse, hsl(221 83% 90% / 0.6) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(ellipse, hsl(221 83% 88% / 0.5) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(ellipse, hsl(230 60% 92% / 0.6) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-0 left-1/3 w-[800px] h-[400px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(ellipse, hsl(221 83% 92% / 0.5) 0%, transparent 70%)' }}
      />
      
      {/* Subtle diagonal lines for depth */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            hsl(221 83% 60%) 100px,
            hsl(221 83% 60%) 101px
          )`
        }}
      />
    </div>
  );
};

export default GridBackground;
