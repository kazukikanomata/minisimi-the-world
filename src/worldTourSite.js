import React from 'react';
import { motion } from 'framer-motion';

const WorldTourSite = () => {

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* ペンキ飛散エフェクト */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.3, 0.1, 0.2], 
          background: 'radial-gradient(circle, rgba(255,0,150,0.3) 0%, rgba(0,255,255,0.2) 50%, rgba(255,255,0,0.1) 100%)' 
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* ヘッダー */}
        <header className="py-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold tracking-wider uppercase">
            Minisimi WORLD TOUR
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#dates" className="hover:text-pink-500 transition">DATES</a></li>
              <li><a href="#tickets" className="hover:text-cyan-500 transition">TICKETS</a></li>
              <li><a href="#gallery" className="hover:text-yellow-500 transition">GALLERY</a></li>
            </ul>
          </nav>
        </header>

        {/* メインコンテンツ */}
        <main className="mt-16">
          <section className="flex flex-col items-center justify-center">
            <motion.h2 
              className="text-6xl font-black uppercase tracking-wider mb-8 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              EXPLOSIVE SONIC JOURNEY
            </motion.h2>
            <p className="text-xl opacity-70 mb-8 text-center">
              グローバルステージで、音楽の限界を超える、未知のエクスペリエンス。
            </p>

            {/* 動画セクション */}
            <div className="relative w-full max-w-4xl">
               {/* Canva埋め込み */}
              <div 
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: "56.25%", // 16:9アスペクト比
                  overflow: "hidden",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                  src="https://www.canva.com/design/DAGYJ5p7LHU/CtShyn9jg_z-6ShuLsN6Og/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                  title='minisimi-the-world-movie'
                ></iframe>
              </div>
            </div>
          </section>

          <section className="mt-12 flex justify-between items-center gap-4 mb-16">
            <div className="flex-1 bg-gray-800 p-6 text-center rounded-lg">
              <h3 className="text-2xl font-bold">🗼 1St. Tokyo</h3>
              <p className="mt-2 opacity-70 my-2">This is the first place.</p>
              <img
                src={`${process.env.PUBLIC_URL}/tokyo.png`}
                alt='tokyo_image'
                className="w-24 h-24 object-cover mx-auto"
                />
            </div>
            <div className="flex-1 bg-gray-800 p-6 text-center rounded-lg">
              <h3 className="text-2xl font-bold">🚣‍♀️ 2nd. Yokosuka</h3>
              <p className="mt-2 opacity-70 my-2">Here is Fune.</p>
              <img
                src={`${process.env.PUBLIC_URL}/yokosuka.png`}
                alt='yokosuka_png'
                className="w-24 h-24 object-cover mx-auto"
              />
            </div>
            <div className="flex-1 bg-gray-800 p-6 text-center rounded-lg">
              <h3 className="text-2xl font-bold">🍁 3rd. Canada</h3>
              <p className="mt-2 opacity-70 my-2">KOKO ORENOMACHI.</p>
              <img
                src={`${process.env.PUBLIC_URL}/canada.png`}
                alt='canada_png'
                className="w-24 h-24 object-cover mx-auto"
              />
            </div>
          </section>
        </main>
      </div>

      {/* フッター */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
        <p className="text-sm">
          © 2024 World Tour. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default WorldTourSite;