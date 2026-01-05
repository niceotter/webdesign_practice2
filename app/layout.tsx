import './globals.css';

export const metadata = {
  title: 'Nice Otter — Immersive Resume',
  description: 'Senior Web Designer Immersive Resume',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      neonPurple: '#a855f7',
                      neonCyan: '#22d3ee',
                      deepBlack: '#0a0a0a',
                    },
                  },
                },
              }
            `,
          }}
        />

        {/* Three.js & GSAP */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
      </head>

      <body>
        {/* Three.js Background */}
        <canvas id="bg"></canvas>

        {children}

        {/* Three.js + GSAP Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const scene = new THREE.Scene();
              const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
              camera.position.z = 50;

              const renderer = new THREE.WebGLRenderer({
                canvas: document.getElementById('bg'),
                alpha: true,
              });
              renderer.setSize(innerWidth, innerHeight);

              const geometry = new THREE.BufferGeometry();
              const count = 2000;
              const positions = new Float32Array(count * 3);

              for (let i = 0; i < count * 3; i++) {
                positions[i] = (Math.random() - 0.5) * 200;
              }

              geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

              const material = new THREE.PointsMaterial({
                color: 0x22d3ee,
                size: 0.7,
              });

              const points = new THREE.Points(geometry, material);
              scene.add(points);

              function animate() {
                requestAnimationFrame(animate);
                points.rotation.y += 0.0008;
                renderer.render(scene, camera);
              }
              animate();

              window.addEventListener('resize', () => {
                camera.aspect = innerWidth / innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(innerWidth, innerHeight);
              });

              gsap.registerPlugin(ScrollTrigger);

              gsap.utils.toArray('.fade').forEach(el => {
                gsap.from(el, {
                  opacity: 0,
                  y: 60,
                  duration: 1,
                  scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                  }
                });
              });

              gsap.from('#heroText', {
                opacity: 0,
                scale: 0.8,
                duration: 1.5,
                ease: 'power3.out'
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
