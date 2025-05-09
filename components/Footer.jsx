import React from "react";
import LogoAr from "@/public/logo_ar_footer.png";
import LogoEn from "@/public/logo_en_footer.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Image from "next/image";
import Link from "next/link";

const QLinks = ({ href, ar, en, lang }) => {
  return (
    <Link href={href}>
      <p
        className={`text-center ${
          lang ? "text-md-end" : "text-md-start"
        } text-white ms-0 ms-md-2 mb-4`}
      >
        {lang ? ar : en}{" "}
      </p>
    </Link>
  );
};

export default function Footer() {
  const lang = useRecoilValue(langState);

  const links = [
    {
      name: "Visit",
      nameAr: "الزيارة",
      links: [
        {
          name: "Why Visit",
          nameAr: "لماذا نزور المعرض",
          href: "/whyVisite",
        },

        {
          name: "Development Road Vision",
          nameAr: "رؤية طريق التنمية ",
          href: "/whoattends",
        },

        {
          name: "Benefits of Participation",
          nameAr: "  فوائد المشاركة",
          href: "/benf",
        },
        {
          name: "Register to visit",
          nameAr: "سجل للزيارة",
          href: "/register",
        },
      ],
    },

    {
      name: "Information for exhibitors",
      nameAr: "معلومات مهمة ",
      links: [
        {
          name: "Location",
          nameAr: "الموقع",
          href: "/location",
        },
        // {
        //   name: "Visas and Travel",
        //   nameAr: "التاشيرات و السفر",
        //   href: "/travel",
        // },
        {
          name: "Marketing campaign",
          nameAr: "الحملة التسويقية",
          href: "/markteing",
        },
        {
          name: "Reports",
          nameAr: "التقرير",
          href: "/reports",
        },
        {
          name: "Conference",
          nameAr: "مؤتمر",
          href: "/conference",
        },
      ],
    },
    {
      name: "Exhibitors",
      nameAr: "المعرض",

      links: [
        {
          name: "Importance of government support",
          nameAr: "اهمية الدعم الحكومي",
          href: "/govermentSupport",
        },
        {
          name: "Exhibition Results",
          nameAr: " نتائج المعرض ",
          href: "/sectors",
        },
        {
          name: "Book Your Space",
          nameAr: "أحجز مساحتك",
          href: "/reserveSpace",
        },
        {
          name: "Become a Sponsor",
          nameAr: "كن راعيا",
          href: "/bookCare",
        },
      ],
    },
  ];

  return (
    <footer className="footer col-12">
      <div className="bg-footer d-flex justify-content-center flex-column">
        <div className="container ">
          <div className="footer__content">
            <div className="row d-flex">
              <div className="col-md-3 col-12 mb-4 px-lg-4 px-2">
                <div
                  className={
                    lang
                      ? " text-md-end text-center "
                      : " text-md-start text-center "
                  }
                >
                  <Image
                    width={2000}
                    height={2000}
                    src={"/logo_light.png"}
                    className="col-12 h-auto mb-4"
                  />
                </div>
                <div
                  className={`d-flex justify-content-center  gap-3 ${
                    lang ? "" : "ms-1"
                  }`}
                >
                  <Link href="https://www.linkedin.com/company/development-road-fair-conference/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#fff"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </Link>

                  <Link href="https://www.instagram.com/development_road_fair?igsh=ZHd4MXYyM256b3Fy" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#fff"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </Link>

                  <Link href="https://www.facebook.com/share/16Fo7XzXNJ/?mibextid=wwXIfr" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#fff"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </Link>

                 
                </div>
              </div>
              <div className="col-md-7 col-12 row px-lg-4 px-2 mx-auto">
                {" "}
                {links.map((item,index) => (
                  <div
                  key={index}

                    className={`${
                      lang
                        ? "text-md-end text-center "
                        : "text-md-start text-center"
                    } col-md-4 col-12`}
                  >
                    <h4 className="text-white pb-3 ">
                      {lang ? item.nameAr : item.name}
                    </h4>
                    {item.links.map((it,i) => (
                      <QLinks
                      key={i}
                        href={it.href}
                        ar={it.nameAr}
                        en={it.name}
                        lang={lang}
                      />
                    ))}
                  </div>
                ))}
                {/* <div
                  className={
                    lang
                      ? "text-md-end text-center "
                      : "text-md-start text-center"
                  }
                >
                  <h3 className="text-white pb-3 ">
                    {lang ? " روابط سريعة" : "QUICK LINKS"}
                  </h3>
                </div> */}
                <div></div>
              </div>

              <div className="col-md-2 col-12 mb-5 mb-md-0 px-0">
                {" "}
                <div
                  className={
                    lang
                      ? " text-md-end text-center "
                      : " text-md-start text-center "
                  }
                >
                  <h3
                    className={`text-center ${
                      lang ? "text-md-end" : "text-md-start"
                    } text-white pb-3`}
                  >
                    {lang ? "  اوقات الافتتاح" : "OPENING TIMES"}
                  </h3>
                </div>
                <div>
                  <p
                    className={`text-center ${
                      lang ? "text-md-end" : "text-md-start"
                    } text-white text-nowrap mb-2`}
                  >
                    <span className="n">
                      {lang ? "1 تشرين الثاني 2025:" : "1 nov 2025:"}
                    </span>
                    <br />
                    <span className="fs-6">
                      {lang
                        ? "سبت: 10:00 صباحا - 5:00 مساءا"
                        : "Saturday : 10:00 AM - 5:00 PM"}
                    </span>
                    <br />
                    <span className="fs-6">{lang ? "" : ""}</span>
                  </p>

                  <p
                    className={`text-center ${
                      lang ? "text-md-end" : "text-md-start"
                    } text-white text-nowrap ms-2 mb-2`}
                  >
                    <span className="n">
                      {lang ? "2 تشرين الثاني 2025:" : "2 nov 2025:"}
                    </span>
                    <br />
                    <span className="fs-6">
                      {lang
                        ? "الاحد: 10:00 صباحا - 5:00 مساءا"
                        : "Sunday: 10:00 - 16:00"}
                    </span>
                    <br />
                    <span className="fs-6">{lang ? "" : ""}</span>
                  </p>

                  <p
                    className={`text-center ${
                      lang ? "text-md-end" : "text-md-start"
                    } text-white text-nowrap ms-2 mb-2`}
                  >
                    <span className="n">
                      {lang ? "3 تشرين الثاني 2025:" : "3 nov 2025:"}
                    </span>
                    <br />
                    <span className="fs-6">
                      {lang
                        ? "الاثنين: 10:00 صباحا - 5:00 مساءا"
                        : "Monday: 10:00 AM - 5:00 PM"}
                    </span>
                    <br />
                    <span className="fs-6">{lang ? "" : ""}</span>
                  </p>
                  <p
                    className={`text-center ${
                      lang ? "text-md-end" : "text-md-start"
                    } text-white text-nowrap ms-2 mb-2`}
                  >
                    <span className="n">
                      {lang ? "4 تشرين الثاني 2025:" : "4 nov 2025:"}
                    </span>
                    <br />
                    <span className="fs-6">
                      {lang
                        ? "الثلاثاء: 10:00 صباحا - 5:00 مساءا"
                        : "Tuesday: 10:00 AM - 5:00 PM"}
                    </span>
                    <br />
                    <span className="fs-6">{lang ? "" : ""}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end container d-flex justify-content-center w-100 border-top">
        <div className="row w-100">
          <div className=" d-flex justify-content-center justify-content-lg-start gap-3 col-lg-6 col-12">
            <a
              className="d-flex justify-content-center  mb-3  footer-icons"
              href="mailto:info@development-road.iq" 
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#fff"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </a>
            <a
              className="d-flex justify-content-center align-items-center mb-3 footer-icons"
              href="tel:+964771115559"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#fff"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
            </a>
            <a
              className="d-flex justify-content-center align-items-center mb-3 footer-icons"
              href="https://maps.app.goo.gl/YMVMNv26E8QH8zoy7?g_st=iw"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#fff"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </a>
          </div>
          <div className="py-lg-3 py-0 col-lg-6 col-12 ">
            <h6
              className={`text-white text-center text-md-${
                lang ? "start" : "end"
              }`}
            >
              Copyright {new Date().toDateString().split(" ")[3]} ©{" "}
              <span className="text-white">Project One </span>.{" "}
              {lang ? "كل الحقوق محفوظة" : "All rights reserved"}.
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
