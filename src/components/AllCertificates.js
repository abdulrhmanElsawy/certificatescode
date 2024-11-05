import './css/RecentCourses.css';

import Landing1Img from './images/landing-1.webp';
import Landing2Img from './images/landing-2.webp';
import Landing3Img from './images/landing-3.webp';
import Landing4Img from './images/landing-4.webp';
import Card from './Card';
import Certificate from './Certificate';

const AllCertificates = () => {

    const certificatesData = [
        {
        id: 1,
        title: "Network+",
        img: Landing1Img,
        description: "فني شبكات حاسب آلي معتمد. هي إحدى الشهادات التي تؤهلك لتأسيس نفسك في مجال الشبكات لتستطيع إكمال مسيرتك بكل جدارة في الحصول على الشهادات الأكثر تخصصياً في هذا المجال من شركات سيسكو أو مايكروسوفت",
        level: "المبتدئين في مجال الشبكات",
        testname: "CompTIA N10-00",
        testprice: "285 دولار"
        },
        {
        id: 2,
        title: "MCSA",
        description: "مساعد حلول مايكروسوفت معتمد 2012 ويندوز. الخطوة الأولى للحصول على الاعتماد المطلوب للعمل على نظام التشغيل ويندوز سيرفر الشهير في تشغيل الخوادم.",
        level: "لا يوجد",
        img: Landing3Img,
        testname: "Exam 70-410, Exam 70-411, Exam 70-412",
        testprice: "165 دولار لكل اختبار"
        },
        {
        id: 3,
        title: "Oracle Certified Professional (OCP) Database Admin",
        description: "تشهد شهادة OCP على مستوى أكثر تعمقًا وتقدمًا من المهارات. يُظهر مهارات قوية في مجال معين من مجالات تقنية أوراكل.",
        level: "إدارة قواعد بيانات Oracle",
        testname: "الحصول على شهادة Oracle Certified Associate (OCA) واجتياز امتحانات إضافية",
        testprice: "245 دولار",
        img: Landing4Img,

        },
        {
        id: 4,
        title: "Sun Microsystems",
        description: "شهادات متخصصة في برمجة Java وأنظمة Solaris، منها شهادة Java Programmer وSolaris Administrator",
        level: "متقدم",
        testname: "Java Programmer, Solaris Administrator",
        testprice: "لا يوجد",
        img: Landing2Img,

        },
        {
        id: 5,
        title: "Novell",
        description: "شهادات لتعزيز المهارات في إدارة الشبكات مثل Novell Certified NetWare Administrator (CNA)، Certified Network Engineer (CNE)، وCertified Linux Professional (CLP).",
        level: "لا يوجد",
        testname: "Novell Certified NetWare Administrator, Certified Network Engineer, Certified Linux Professional",
        testprice: "لا يوجد",
        img: Landing1Img,

        },
        {
        id: 6,
        title: "CompTIA",
        description: "مجموعة متنوعة من الشهادات في مجال تكنولوجيا المعلومات مثل CompTIA A+, Network+, Security+, Cloud+, CySA+, PenTest+.",
        level: "مبتدئ إلى متقدم",
        testname: "CompTIA A+, Network+, Security+, Cloud+, CySA+, PenTest+",
        testprice: "لا يوجد",
        img: Landing3Img,

        },
        {
        id: 7,
        title: "Security+",
        description: "شهادة في مجال الأمن السيبراني تزوّد الحاصلين عليها بالمهارات الأساسية المطلوبة لتأمين الشبكات واكتشاف التهديدات والتعامل معها.",
        level: "مبتدئ",
        testname: "CompTIA Security+",
        testprice: "311 دولار",
        img: Landing4Img,

        },
        {
        id: 8,
        title: "CCNA",
        description: "شهادة من سيسكو لتطوير المهارات في مجال الشبكات، تشمل تصميم وإعداد الشبكات، استكشاف الأخطاء، بروتوكولات الشبكات، والأمن السيبراني.",
        level: "لا يوجد",
        testname: "Cisco CCNA",
        testprice: "300 دولار",
        img: Landing2Img,

        },
        {
        id: 9,
        title: "Java Certified Programmer",
        description: "شهادة متقدمة تعكس القدرة على تطوير تطبيقات Java بكفاءة عالية، وتشمل مستويات متعددة مثل Oracle Certified Associate (OCA) وOracle Certified Professional (OCP) وOracle Certified Master (OCM).",
        level: "مبتدئ إلى متقدم",
        testname: "Oracle Certified Associate (OCA), Oracle Certified Professional (OCP), Oracle Certified Master (OCM)",
        testprice: "لا يوجد",
        img: Landing3Img,

        },
        {
        id: 10,
        title: "Oracle Certified Master (OCM)",
        description: "أعلى شهادة من أوراكل في قواعد البيانات وإدارة الأنظمة، تعكس مستوى عالٍ من الخبرة والمعرفة والمهارات العملية في التعامل مع منتجات أوراكل.",
        level: "خبير",
        testname: "Oracle Certified Master (OCM)",
        testprice: "لا يوجد",
        img: Landing1Img,

        }
    ];

    
    
    return (
        <section className='recent-courses'>
            <div className='container'>
                <div className='row'>
                {certificatesData.map((certificate, index) => (
                    <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                        <Certificate key={index} language={certificate.language} level={certificate.level} testname={certificate.testname} img={certificate.img} title={certificate.title} description={certificate.description}  testprice={certificate.testprice} />
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AllCertificates
