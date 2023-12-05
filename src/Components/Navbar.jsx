 import   '../assets/plugins/font-awesome/css/font-awesome.min.css' ;
 import '../assets/dist/css/adminlte.min.css'
 import '../assets/plugins/iCheck/flat/blue.css'
 import '../assets/plugins/morris/morris.css'
 import'../assets/plugins/jvectormap/jquery-jvectormap-1.2.2.css'
 import'../assets/plugins/datepicker/datepicker3.css'
 import'../assets/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'
 import'../assets/dist/css/bootstrap-rtl.min.css'
 import'../assets/dist/css/custom-style.css'

const Navbar=()=>{
    return(
        <>
            <div className="wrapper">

                 <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars"></i></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="index3.html" className="nav-link">خانه</a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link">تماس</a>
                        </li>
                    </ul>

                     <form className="form-inline ml-3">
                        <div className="input-group input-group-sm">
                            <input className="form-control form-control-navbar" type="search" placeholder="جستجو" aria-label="Search"/>
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                        </div>
                    </form>

                     <ul className="navbar-nav mr-auto">
                         <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="fa fa-comments-o"></i>
                                <span className="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                                <a href="#" className="dropdown-item">
                                     <div className="media">
                                        <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 ml-3 img-circle"/>
                                            <div className="media-body">
                                                <h3 className="dropdown-item-title">
                                                    حسام موسوی
                                                    <span className="float-left text-sm text-danger"><i className="fa fa-star"></i></span>
                                                </h3>
                                                <p className="text-sm">با من تماس بگیر لطفا...</p>
                                                <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1"></i> 4 ساعت قبل</p>
                                            </div>
                                    </div>
                                 </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                     <div className="media">
                                        <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle ml-3"/>
                                            <div className="media-body">
                                                <h3 className="dropdown-item-title">
                                                    پیمان احمدی
                                                    <span className="float-left text-sm text-muted"><i className="fa fa-star"></i></span>
                                                </h3>
                                                <p className="text-sm">من پیامتو دریافت کردم</p>
                                                <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1"></i> 4 ساعت قبل</p>
                                            </div>
                                    </div>
                                 </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                     <div className="media">
                                        <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle ml-3"/>
                                            <div className="media-body">
                                                <h3 className="dropdown-item-title">
                                                    سارا وکیلی
                                                    <span className="float-left text-sm text-warning"><i className="fa fa-star"></i></span>
                                                </h3>
                                                <p className="text-sm">پروژه اتون عالی بود مرسی واقعا</p>
                                                <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1"></i>4 ساعت قبل</p>
                                            </div>
                                    </div>
                                 </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer">مشاهده همه پیام‌ها</a>
                            </div>
                        </li>
                         <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="fa fa-bell-o"></i>
                                <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                                <span className="dropdown-item dropdown-header">15 نوتیفیکیشن</span>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fa fa-envelope ml-2"></i> 4 پیام جدید
                                    <span className="float-left text-muted text-sm">3 دقیقه</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fa fa-users ml-2"></i> 8 درخواست دوستی
                                    <span className="float-left text-muted text-sm">12 ساعت</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fa fa-file ml-2"></i> 3 گزارش جدید
                                    <span className="float-left text-muted text-sm">2 روز</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer">مشاهده همه نوتیفیکیشن</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i
                                className="fa fa-th-large"></i></a>
                        </li>
                    </ul>
                </nav>

                 <aside className="main-sidebar sidebar-dark-primary elevation-4">
                     <a href="index3.html" className="brand-link">
                        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style="opacity: .8"/>
                            <span className="brand-text font-weight-light">پنل مدیریت</span>
                    </a>

                     <div className="sidebar" style="direction: ltr">
                        <div style="direction: rtl">
                             <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                <div className="image">
                                    <img src="https://www.gravatar.com/avatar/52f0fbcbedee04a121cba8dad1174462?s=200&d=mm&r=g" className="img-circle elevation-2" alt="User Image"/>
                                </div>
                                <div className="info">
                                    <a href="#" className="d-block">حسام موسوی</a>
                                </div>
                            </div>

                             <nav className="mt-2">
                                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                      <li className="nav-item has-treeview menu-open">
                                        <a href="#" className="nav-link active">
                                            <i className="nav-icon fa fa-dashboard"></i>
                                            <p>
                                                داشبوردها
                                                <i className="right fa fa-angle-left"></i>
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="./index.html" className="nav-link active">
                                                    <i className="fa fa-circle-o nav-icon"></i>
                                                    <p>داشبورد اول</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./index2.html" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"></i>
                                                    <p>داشبورد دوم</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./index3.html" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"></i>
                                                    <p>داشبورد سوم</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/widgets.html" className="nav-link">
                                            <i className="nav-icon fa fa-th"></i>
                                            <p>
                                                ویجت‌ها
                                                <span className="right badge badge-danger">جدید</span>
                                            </p>
                                        </a>
                                    </li>
                                    <li className="nav-item has-treeview">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fa fa-pie-chart"></i>
                                            <p>
                                                چارت‌ها
                                                <i className="right fa fa-angle-left"></i>
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/charts/chartjs.html" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"></i>
                                                    <p>نمودار ChartJS</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/charts/flot.html" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"></i>
                                                    <p>نمودار Flot</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/charts/inline.html" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"></i>
                                                    <p>نمودار Inline</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item has-treeview">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fa fa-tree"></i>
                                            <p>
                                                اشیای گرافیکی
                                                <i className="fa fa-angle-left right"></i>
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/UI/general.html" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"></i>
                                                    <p>عمومی</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/UI/icons.html" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"></i>
                                                    <p>آیکون‌ها</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/UI/buttons.html" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"></i>
                                                    <p>دکمه‌ها</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/UI/sliders.html" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"></i>
                                                    <p>اسلایدر‌ها</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item has-treeview">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fa fa-edit"></i>
                                            <p>
                                                فرم‌ها
                                                <i className="fa fa-angle-left right"></i>
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/forms/general.html" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"></i>
                                                    <p>اجزا عمومی</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/forms/advanced.html" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"></i>
                                                    <p>پیشرفته</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/forms/editors.html" className="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>ویشرایشگر</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item has-treeview">
                                        <a href="#" class="nav-link">
                                            <i class="nav-icon fa fa-table"></i>
                                            <p>
                                                جداول
                                                <i class="fa fa-angle-left right"></i>
                                            </p>
                                        </a>
                                        <ul class="nav nav-treeview">
                                            <li class="nav-item">
                                                <a href="pages/tables/simple.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>جداول ساده</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="pages/tables/data.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>جداول داده</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-header">مثال‌ها</li>
                                    <li class="nav-item">
                                        <a href="pages/calendar.html" class="nav-link">
                                            <i class="nav-icon fa fa-calendar"></i>
                                            <p>
                                                تقویم
                                                <span class="badge badge-info right">2</span>
                                            </p>
                                        </a>
                                    </li>
                                    <li class="nav-item has-treeview">
                                        <a href="#" class="nav-link">
                                            <i class="nav-icon fa fa-envelope-o"></i>
                                            <p>
                                                ایمیل‌ باکس
                                                <i class="fa fa-angle-left right"></i>
                                            </p>
                                        </a>
                                        <ul class="nav nav-treeview">
                                            <li class="nav-item">
                                                <a href="pages/mailbox/mailbox.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>اینباکس</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="pages/mailbox/compose.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>ایجاد</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="pages/mailbox/read-mail.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>خواندن</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item has-treeview">
                                        <a href="#" class="nav-link">
                                            <i class="nav-icon fa fa-book"></i>
                                            <p>
                                                صفحات
                                                <i class="fa fa-angle-left right"></i>
                                            </p>
                                        </a>
                                        <ul class="nav nav-treeview">
                                            <li class="nav-item">
                                                <a href="pages/examples/invoice.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>سفارشات</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="pages/examples/profile.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>پروفایل</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="pages/examples/login.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>صفحه ورود</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="pages/examples/register.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>صفحه عضویت</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="pages/examples/lockscreen.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>قفل صفحه</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item has-treeview">
                                        <a href="#" class="nav-link">
                                            <i class="nav-icon fa fa-plus-square-o"></i>
                                            <p>
                                                بیشتر
                                                <i class="fa fa-angle-left right"></i>
                                            </p>
                                        </a>
                                        <ul class="nav nav-treeview">
                                            <li class="nav-item">
                                                <a href="pages/examples/404.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>ارور 404</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="pages/examples/500.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>ارور 500</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="pages/examples/blank.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>صفحه خالی</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="starter.html" class="nav-link">
                                                    <i class="fa fa-circle-o nav-icon"></i>
                                                    <p>صفحه شروع</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-header">متفاوت</li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="nav-icon fa fa-file"></i>
                                            <p>مستندات</p>
                                        </a>
                                    </li>
                                    <li class="nav-header">برچسب‌ها</li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="nav-icon fa fa-circle-o text-danger"></i>
                                            <p class="text">مهم</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="nav-icon fa fa-circle-o text-warning"></i>
                                            <p>هشدار</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="nav-icon fa fa-circle-o text-info"></i>
                                            <p>اطلاعات</p>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                         </div>
                    </div>
                 </aside>



                 <aside class="control-sidebar control-sidebar-dark">
                 </aside>
             </div>
        </>
    )
}

export default Navbar;