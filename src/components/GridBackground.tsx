const GridBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft blue tinted background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, hsl(221 83% 97%) 0%, hsl(0 0% 100%) 50%, hsl(221 83% 98%) 100%)`
        }}
      />
      
      {/* Subtle grid pattern with blue tint */}
      <div 
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(221 83% 85% / 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(221 83% 85% / 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Blue gradient orbs for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-secondary/8 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-accent rounded-full blur-3xl opacity-60" />
      
      {/* Gradient fade at edges */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, transparent 0%, hsl(221 83% 99% / 0.5) 70%)
          `
        }}
      />
    </div>
  );
};

export default GridBackground;
