import "./globals.css";

export const metadata = {
  title: "하천 수위 정보 알림 - River Level Info"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#ffffff] text-white overflow-x-hidden">
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

