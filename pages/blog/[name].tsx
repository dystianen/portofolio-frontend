import { Title } from "@/component/title";
import Image from "next/image";
import React from "react";

function Blog() {
  return (
    <div className="relative pb-10 -mt-8 md:mt-0">
      <div className="flex flex-col justify-center items-center gap-5 mt-8 w-full">
        <Image
          className="w-[70%] h-[450px] rounded-lg"
          src={"/assets/blog/Javascript.png"}
          width={1000}
          height={200}
          alt={"thumbnail"}
        />
        <div className="m-4">
          <Title>Apa Itu Javascript?</Title>
          <div className="text-sm">
            Tahukah kamu bahwa JavaScript adalah bahasa pemrograman yang
            digunakan dalam pengembangan website agar lebih dinamis dan
            interaktif. Kalau sebelumnya kamu hanya mengenal HTML dan CSS, nah
            sekarang kamu jadi tahu bahwa JavaScript dapat meningkatkan
            fungsionalitas pada halaman web. Bahkan dengan JavaScript ini kamu
            bisa membuat aplikasi, tools, atau bahkan game pada web. Bicara
            teknis, JavaScript atau kita singkat menjadi JS merupakan bahasa
            pemrograman jenis interpreter, sehingga kamu tidak memerlukan
            compiler untuk menjalankannya. JavaScript memiliki fitur-fitur
            seperti berorientasi objek, client-side, high-level programming, dan
            loosely typed.
          </div>

          <Title>Sejarah Javascript</Title>
          <div className="text-sm">
            Awal hingga pertengahan 1990-an adalah waktu yang penting bagi
            internet, dan pada bulan September 1995, seorang programmer Netscape
            bernama Brandan Eich mengembangkan bahasa scripting baru hanya dalam
            10 hari. Awalnya bernama Mocha, tetapi dengan cepat dikenal sebagai
            LiveScript dan, kemudian, JavaScript. JavaScript pada mulanya
            ditemukan oleh Brendan Eich pada tahun 1995, yang kemudian
            dikembangkan untuk Netscape 2, dan menjadi standar ECMA-262 pada
            tahun 1997. Setelah Netscape menyerahkan JavaScript ke ECMA, yayasan
            Mozilla terus mengembangkan JavaScript untuk browser Firefox. Versi
            terbaru Mozilla adalah 1.8.5. (Identik dengan ES5). JavaScript
            sejauh ini merupakan bahasa pemrograman yang paling populer di
            dunia. Menurut laporan Octoverse 2018 dari GitHub, ada lebih banyak
            repositori kode JavaScript daripada bahasa pemrograman lain, dan
            jumlah ini terus meningkat tahun demi tahun. Serangkaian kerangka
            kerja dan pustaka JavaScript, seperti Ember, Angular, React, dan
            Vue, telah dikembangkan untuk memungkinkan aplikasi web yang kuat
            dan rumit ditulis dalam jangka waktu yang singkat. Selain software
            untuk klien dan server, JavaScript saat ini bahkan memungkinkan
            programmer untuk menciptakan aplikasi seluler dengan menggunakan
            JavaScript.
          </div>

          <Title>Fungsi</Title>
          <div className="text-sm">
            Secara umum berikut merupakan penjelasan fungsi dari JS yang perlu
            kamu ketahui.
            <br />
            <ol>
              <li>
                1. Menjalankan web server Salah satu fungsi dari JavaScript
                adalah bisa menjalankan web server. Penggunaannya pada sisi
                server ini memungkinkan Anda dalam mengoperasikan website maupun
                aplikasi yang dibangun secara khusus dengan bahasa pemrograman
                yang satu ini. Salah satu framework JS yang bisa dipakai pada
                sisi server yaitu Node.js. Framework ini mempunyai kemampuan
                multitasking yang andal dan bisa membuat pekerjaan menjadi lebih
                efisien.
              </li>
              <br />
              <li>
                2. Membuat game Anda tentu pernah bermain game online melalui
                browser di hp atau laptop kan? Untuk membuat game ini diperlukan
                JavaScript. Umumnya JS akan dikombinasikan dengan JTML5 yang
                membuat game browser. Selain itu ada juga framework lainnya yang
                khusus digunakan untuk membuat game contohnya Panda.js atau
                Quintus.
              </li>{" "}
              <br />
              <li>
                3. Mengembangkan aplikasi mobile Fungsi selanjutnya JS juga
                berperan dalam membangun serta mengembangkan aplikasi mobile.
                Saat ini JS sudah dapat dimasukkan ada mobile API yaitu bisa
                membuat aplikasi mobile di Android ataupun iOS. Framework JS
                yang biasa dipakai untuk membangun aplikasi mobile-friendly
                yaitu React Native.
              </li>
              <br />
              <li>
                4. Membuat website interaktif Fungsi yang terakhir dari
                JavaScript adalah bisa digunakan untuk membuat tampilan web
                serta aplikasi menjadi lebih dinamis. Ya, website yang
                menggunakan JS akan memiliki tampilan dinamis sehingga dinilai
                lebih user-friendly serta menarik dan interaktif. Hal ini tentu
                akan memberikan pengalaman yang baik bagi pengguna aplikasi.
                Adapun cara mengaktifkan JavaScript ini bisa dilakukan dengan
                berbagai cara, salah satunya di browser. Langkah-langkahnya
                sangatlah mudah, pertama Anda bisa membuka browser yang ada di
                laptop atau komputer Anda. Selanjutnya klik ikon titik tiga yang
                berada di pojok kanan atas lalu klik opsi setelan.
              </li>
            </ol>
          </div>

          <Title>Kelebihan</Title>
          <div className="text-sm">
            <ul>
              <li>
                1. Speed (kecepatan). JavaScript cenderung sangat cepat karena
                sering langsung dijalankan dalam browser setiap klien. Selama
                tidak memerlukan sumber daya dari luar, JavaScript tidak
                diperlambat oleh panggilan ke server backend. Juga, semua
                browser utama mendukung kompilasi JIT (tepat waktu) untuk
                JavaScript, artinya tidak perlu mengkompilasi kode sebelum
                menjalankannya.
              </li>{" "}
              <br />
              <li>
                2. Simplicity (kesederhanaan). JavaScript relatif sederhana
                untuk dipelajari dan diterapkan. Sintaks JavaScript terinspirasi
                oleh Java dan relatif mudah dipelajari dibandingkan dengan
                bahasa populer lainnya seperti C++.
              </li>{" "}
              <br />
              <li>
                3. Popularity (popularitas). JavaScript digunakan di mana saja
                di web. JavaScript ada di mana-mana di web, dan dengan munculnya
                Node.js, semakin banyak digunakan di backend. Ada banyak sumber
                daya untuk mempelajari JavaScript. Baik StackOverflow dan GitHub
                menunjukkan peningkatan jumlah proyek yang menggunakan
                JavaScript, dan daya tarik yang diperoleh dalam beberapa tahun
                terakhir diperkirakan akan meningkat.
              </li>{" "}
              <br />
              <li>
                4. Interoperability (interopabilitas). JavaScript bermain dengan
                baik dengan bahasa lain dan dapat digunakan dalam berbagai macam
                aplikasi. Tidak seperti PHP atau bahasa skrip lainnya,
                JavaScript dapat dimasukkan ke halaman web mana pun. JavaScript
                dapat digunakan dalam berbagai jenis aplikasi karena dukungan
                dalam bahasa lain seperti Pearl dan PHP.
              </li>{" "}
              <br />
              <li>
                5. Update (pembaruan). Sejak munculnya ECMAScript 5 (spesifikasi
                skrip yang diandalkan JavaScript), ECMA International telah
                didedikasikan untuk memperbarui JavaScript setiap tahun. Sejauh
                ini, kami telah menerima dukungan browser untuk ES6 pada tahun
                2017 dan berharap ES7 didukung di masa mendatang Beban Server
                JavaScript adalah bahasa pemrograman yang bisa juga disebut
                sebagai “sisi klien”, sehingga mengurangi permintaan pada server
                secara keseluruhan, dan aplikasi sederhana mungkin tidak
                memerlukan server sama sekali. Antarmuka yang kaya JavaScript
                dapat digunakan untuk membuat fitur seperti seret dan lepas dan
                komponen seperti penggeser, yang semuanya sangat meningkatkan
                antarmuka pengguna dan pengalaman situs. Fungsionalitas yang
                Diperluas Pengembang dapat memperluas fungsionalitas halaman web
                dengan menulis potongan JavaScript untuk pengaya pihak ketiga
                seperti Greasemonkey. Keserbagunaan Ada banyak cara untuk
                menggunakan JavaScript melalui server Node.js. Jika Anda
                mem-bootstrap Node.js dengan Express, menggunakan database
                dokumen seperti MongoDB, dan menggunakan JavaScript di frontend
                untuk klien, dimungkinkan untuk mengembangkan seluruh aplikasi
                JavaScript dari depan ke belakang hanya dengan menggunakan
                JavaScript.
              </li>
            </ul>
          </div>

          <Title>Kekurangan</Title>
          <div className="text-sm">
            Namun kekurangan dari bahasa pemrograman JavaScript adalah tidak
            cocok digunakan untuk aplikasi standalone. Hal tersebut karena
            aplikasi ini berdiri sendiri dengan dibangun oleh satu bahasa
            pemrograman yang cocok saja. Terakhir JS juga dinilai memiliki objek
            yang sangat terbatas.
          </div>

          <Title>Kesimpulan</Title>
          <div className="text-sm">
            JavaScript adalah bahasa pemrograman yang sering digunakan untuk
            mengembangkan aplikasi web interaktif. Dikembangkan oleh Netscape,
            JavaScript sekarang menjadi salah satu teknologi inti dalam
            pengembangan web bersama dengan HTML dan CSS. Berikut adalah
            beberapa kesimpulan tentang JavaScript: Bahasa Pemrograman Web:
            JavaScript dirancang khusus untuk pengembangan web dan dapat
            dieksekusi di sisi klien (browser). Ini memungkinkan pengembang
            untuk membuat halaman web interaktif dan responsif. Client-Side
            Scripting: JavaScript berfungsi sebagai bahasa skrip di sisi klien,
            yang berarti kode dieksekusi di perangkat pengguna, tidak memerlukan
            pemrosesan di server. Ini membantu meningkatkan responsivitas dan
            kinerja aplikasi web. Dukungan Cross-Browser: JavaScript didukung
            oleh sebagian besar browser modern, membuatnya menjadi pilihan utama
            untuk pengembangan lintas platform. Ini memungkinkan pengembang
            membuat aplikasi web yang konsisten di berbagai browser.
            Asynchronous Programming: JavaScript mendukung pemrograman asinkron,
            memungkinkan eksekusi kode tanpa harus menunggu tugas tertentu
            selesai. Ini membantu mencegah pembekuan antarmuka pengguna dan
            meningkatkan efisiensi aplikasi. Ekosistem yang Kuat: JavaScript
            memiliki ekosistem yang kuat dengan berbagai perpustakaan dan
            framework seperti React, Angular, dan Vue.js. Ini mempercepat
            pengembangan dan memungkinkan pembuatan aplikasi kompleks dengan
            lebih mudah. Object-Oriented: JavaScript adalah bahasa pemrograman
            berorientasi objek, yang berarti ia mendukung paradigma pemrograman
            objek. Ini memungkinkan pengembang untuk membuat dan mengorganisir
            kode dengan lebih terstruktur. Dinamis dan Fleksibel: JavaScript
            adalah bahasa yang dinamis dan fleksibel. Variabel tidak perlu
            dideklarasikan dengan tipe tertentu, memungkinkan perubahan dinamis
            dalam kode. Node.js untuk Server-Side Development: Node.js
            memungkinkan penggunaan JavaScript di sisi server, yang memperluas
            kemampuan pengembang untuk membuat aplikasi web berbasis server dan
            mengintegrasikannya dengan sisi klien. Terus Berkembang: JavaScript
            terus berkembang dengan penambahan fitur dan perbaikan melalui
            standar terbaru (ECMAScript). Ini menunjukkan komitmen industri
            terhadap meningkatkan kualitas dan kemampuan bahasa ini. Dengan
            karakteristik ini, JavaScript tetap menjadi salah satu pilihan utama
            untuk pengembangan web, memungkinkan pembuat aplikasi untuk
            menciptakan pengalaman pengguna yang interaktif dan dinamis di
            berbagai platform.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
