import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main className='relative right-20'>
      <Spline
        scene="https://prod.spline.design/9sOMzhPItXjBhuWV/scene.splinecode" 
        style={{ width: '600px', height: '500px'}}
      />
    </main>
  );
}
