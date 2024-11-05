import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import './css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                        <div className='footer-content'>
                            <h2> معلومات الاتصال </h2>
                            <ul>  
                                <li>
                                    <Link to="#"> مغلق : الجمعة </Link>

                                </li>

                                <li>
                                    <Link to="#"> مواعيد العمل : من السبت الى الخميس </Link>
                                </li>

                                <li>
                                    <Link to="#"> رقم الهاتف : +9666 666 666  </Link>
                                </li>

                                <li>
                                    <Link to="#"> البريد : info@gmail.com </Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                        <div className='footer-content'>
                            <h2> اخر الشهادات  </h2>
                            <ul>  
                                <li>
                                    <Link to="#"> شهادة الموارد البشرية الأساسية </Link>

                                </li>

                                <li>
                                    <Link to="#"> شهادة إدارة المشاريع الاحترافية </Link>
                                </li>

                                <li>
                                    <Link to="#"> شهادة مهندس شبكات معتمد </Link>
                                </li>

                                <li>
                                    <Link to="#">شهادة خبير تقنية المعلومات</Link>
                                </li>

                                <li>
                                    <Link to="#">شهادة تحليل البيانات في الأعمال</Link>
                                </li>

                                <li>
                                    <Link to="#">شهادة محترف إدارة فرق العمل</Link>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                        <div className='footer-content'>
                            <h2> اخر المقالات  </h2>
                            <ul>  
                                <li>
                                    <Link to="#"> كيف تحسن من مهارات إدارة الموارد البشرية </Link>

                                </li>

                                <li>
                                    <Link to="#"> أحدث الاتجاهات في إدارة المشاريع </Link>
                                </li>

                                <li>
                                    <Link to="#"> دور الشبكات في تحسين الأعمال </Link>
                                </li>

                                <li>
                                    <Link to="#">تكنولوجيا المعلومات ومستقبل التطور التقني</Link>
                                </li>

                                <li>
                                    <Link to="#">البيانات الضخمة وأهميتها في الأعمال</Link>
                                </li>

                                <li>
                                    <Link to="#">أهمية التدريب في تطوير المهارات الوظيفية </Link>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                    <div className='footer-content'>
                            <h2> اشترك معنا  </h2>
                            
                            <div className='input'>
                                <input type='text' placeholder='أدخل بريدك الإلكتروني' />
                                <ArrowLeftIcon />
                            </div>

                            <p>
                                هذا الموقع محمي بواسطة reCAPTCHA وتطبق سياسة الخصوصية وشروط الخدمة من Google.
                            </p>

                            <div className='socials'>
                                <Link to="#"><i className="lab la-facebook-f"></i> </Link>
                                <Link to="#"><i className="lab la-twitter"></i> </Link>
                                <Link to="#"><i className="lab la-instagram"></i> </Link>
                                <Link to="#"><i className="lab la-linkedin-in"></i> </Link>
                                <Link to="#"><i className="lab la-youtube"></i> </Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-12'>
                        <div className='copy-right'>
                            <h4> 2024 شركة الشاهادات العربية السعودية (الشاهادات) جميع الحقوق محفوظة ل</h4>
                        </div>
                    </div>




                </div>
            </div>
        </footer>
    )
}

export default Footer;
