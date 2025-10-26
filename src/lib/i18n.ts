import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.listings': 'Listings',
      'nav.contact': 'Contact',
      'nav.dashboard': 'Dashboard',
      'nav.signin': 'Sign In',
      'nav.signup': 'Sign Up',
      'nav.signout': 'Sign Out',
      'nav.profile': 'Profile',
      'nav.favorites': 'Favorites',
      'nav.myListings': 'My Listings',
      
      // Home
      'home.hero.title': 'Discover Amazing Places',
      'home.hero.subtitle': 'Find the best restaurants, cafes, and services in your area',
      'home.categories.title': 'Browse by Category',
      'home.featured.title': 'Featured Listings',
      
      // Search & Filters
      'search.placeholder': 'Search locations...',
      'search.filters': 'Filters',
      'search.category': 'Category',
      'search.price': 'Price Range',
      'search.distance': 'Distance',
      'search.sortBy': 'Sort By',
      'search.apply': 'Apply Filters',
      'search.clear': 'Clear All',
      'search.results': 'results found',
      
      // Listings
      'listing.rating': 'Rating',
      'listing.reviews': 'reviews',
      'listing.distance': 'km away',
      'listing.viewDetails': 'View Details',
      'listing.favorite': 'Save to Favorites',
      'listing.share': 'Share',
      'listing.contact': 'Contact',
      'listing.hours': 'Opening Hours',
      'listing.amenities': 'Amenities',
      'listing.gallery': 'Gallery',
      
      // Auth
      'auth.signIn': 'Sign In',
      'auth.signUp': 'Sign Up',
      'auth.email': 'Email',
      'auth.password': 'Password',
      'auth.fullName': 'Full Name',
      'auth.confirmPassword': 'Confirm Password',
      'auth.forgotPassword': 'Forgot Password?',
      'auth.rememberMe': 'Remember Me',
      'auth.noAccount': "Don't have an account?",
      'auth.hasAccount': 'Already have an account?',
      'auth.resetPassword': 'Reset Password',
      'auth.backToSignIn': 'Back to Sign In',
      
      // Dashboard
      'dashboard.title': 'Dashboard',
      'dashboard.overview': 'Overview',
      'dashboard.listings': 'Listings',
      'dashboard.users': 'Users',
      'dashboard.categories': 'Categories',
      'dashboard.addListing': 'Add Listing',
      'dashboard.editListing': 'Edit Listing',
      'dashboard.deleteListing': 'Delete Listing',
      
      // Owner
      'owner.myListings': 'My Listings',
      'owner.addNew': 'Add New Listing',
      'owner.edit': 'Edit',
      'owner.delete': 'Delete',
      
      // Contact
      'contact.title': 'Contact Us',
      'contact.subtitle': 'Get in touch with us',
      'contact.name': 'Name',
      'contact.message': 'Message',
      'contact.send': 'Send Message',
      
      // Common
      'common.loading': 'Loading...',
      'common.save': 'Save',
      'common.cancel': 'Cancel',
      'common.delete': 'Delete',
      'common.edit': 'Edit',
      'common.close': 'Close',
      'common.submit': 'Submit',
      'common.language': 'Language',
      'common.theme': 'Theme',
      'common.light': 'Light',
      'common.dark': 'Dark',
      'common.view': 'View',
      
      // Profile
      'profile.myFavorites': 'My Favorites',
      'profile.visitedHistory': 'Visited History',
      'profile.history': 'History',
      'profile.noFavorites': 'No favorites yet',
      'profile.noHistory': 'No visited places yet',
      'profile.visited': 'Visited',
      'profile.manageFavorites': 'Manage your favorite places',
      'profile.startSaving': 'Start exploring and save your favorite places here',
    },
  },
  ar: {
    translation: {
      // Navigation
      'nav.home': 'الرئيسية',
      'nav.listings': 'القوائم',
      'nav.contact': 'اتصل بنا',
      'nav.dashboard': 'لوحة التحكم',
      'nav.signin': 'تسجيل الدخول',
      'nav.signup': 'إنشاء حساب',
      'nav.signout': 'تسجيل الخروج',
      'nav.profile': 'الملف الشخصي',
      'nav.favorites': 'المفضلة',
      'nav.myListings': 'قوائمي',
      
      // Home
      'home.hero.title': 'اكتشف أماكن مذهلة',
      'home.hero.subtitle': 'اعثر على أفضل المطاعم والمقاهي والخدمات في منطقتك',
      'home.categories.title': 'تصفح حسب الفئة',
      'home.featured.title': 'القوائم المميزة',
      
      // Search & Filters
      'search.placeholder': 'ابحث عن الأماكن...',
      'search.filters': 'التصفية',
      'search.category': 'الفئة',
      'search.price': 'نطاق السعر',
      'search.distance': 'المسافة',
      'search.sortBy': 'ترتيب حسب',
      'search.apply': 'تطبيق الفلاتر',
      'search.clear': 'مسح الكل',
      'search.results': 'نتيجة',
      
      // Listings
      'listing.rating': 'التقييم',
      'listing.reviews': 'مراجعات',
      'listing.distance': 'كم',
      'listing.viewDetails': 'عرض التفاصيل',
      'listing.favorite': 'حفظ في المفضلة',
      'listing.share': 'مشاركة',
      'listing.contact': 'اتصل',
      'listing.hours': 'ساعات العمل',
      'listing.amenities': 'المرافق',
      'listing.gallery': 'المعرض',
      
      // Auth
      'auth.signIn': 'تسجيل الدخول',
      'auth.signUp': 'إنشاء حساب',
      'auth.email': 'البريد الإلكتروني',
      'auth.password': 'كلمة المرور',
      'auth.fullName': 'الاسم الكامل',
      'auth.confirmPassword': 'تأكيد كلمة المرور',
      'auth.forgotPassword': 'نسيت كلمة المرور؟',
      'auth.rememberMe': 'تذكرني',
      'auth.noAccount': 'ليس لديك حساب؟',
      'auth.hasAccount': 'لديك حساب بالفعل؟',
      'auth.resetPassword': 'إعادة تعيين كلمة المرور',
      'auth.backToSignIn': 'العودة لتسجيل الدخول',
      
      // Dashboard
      'dashboard.title': 'لوحة التحكم',
      'dashboard.overview': 'نظرة عامة',
      'dashboard.listings': 'القوائم',
      'dashboard.users': 'المستخدمون',
      'dashboard.categories': 'الفئات',
      'dashboard.addListing': 'إضافة قائمة',
      'dashboard.editListing': 'تعديل القائمة',
      'dashboard.deleteListing': 'حذف القائمة',
      
      // Owner
      'owner.myListings': 'قوائمي',
      'owner.addNew': 'إضافة قائمة جديدة',
      'owner.edit': 'تعديل',
      'owner.delete': 'حذف',
      
      // Contact
      'contact.title': 'اتصل بنا',
      'contact.subtitle': 'تواصل معنا',
      'contact.name': 'الاسم',
      'contact.message': 'الرسالة',
      'contact.send': 'إرسال الرسالة',
      
      // Common
      'common.loading': 'جاري التحميل...',
      'common.save': 'حفظ',
      'common.cancel': 'إلغاء',
      'common.delete': 'حذف',
      'common.edit': 'تعديل',
      'common.close': 'إغلاق',
      'common.submit': 'إرسال',
      'common.language': 'اللغة',
      'common.theme': 'المظهر',
      'common.light': 'فاتح',
      'common.dark': 'داكن',
      'common.view': 'عرض',
      
      // Profile
      'profile.myFavorites': 'مفضلاتي',
      'profile.visitedHistory': 'تاريخ الزيارات',
      'profile.history': 'السجل',
      'profile.noFavorites': 'لا توجد مفضلات بعد',
      'profile.noHistory': 'لا توجد أماكن تمت زيارتها بعد',
      'profile.visited': 'تمت الزيارة',
      'profile.manageFavorites': 'إدارة الأماكن المفضلة لديك',
      'profile.startSaving': 'ابدأ الاستكشاف واحفظ أماكنك المفضلة هنا',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'ar', // Default to Arabic
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;