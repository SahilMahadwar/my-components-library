import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={() => console.log('sup')}
        className="
        select-none
        inline-flex justify-center rounded-md
        px-4 py-3
        bg-color-info-500
        uppercase text-color-primary-100 font-display font-bold text-sm
        "
      >
        button
      </button>
    </div>
  );
}
