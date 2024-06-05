const relod1 = document.getElementById('relod');
let typedar = document.getElementById('typedar');
// تعريف القاموس الذي يحتوي على النصوص الأصلية ومرادفاتها
const dictionary = {
    'محمد': 'mohamed',
    'عبدالوهاب': 'abdalwahab',
    'المليكي': 'ALmliki',
    'الرئيسية': 'Home',
    'الخدمات': 'services',
    'المهارات': 'skills',
    'تواصل': 'contact',
    'معنا': 'with us',
    'مطور انظمة': 'systems developer',
    'الحماية الرقمية': 'security',
    'الحماية': 'security',
    'التفاصيل': 'the details',
    'اصلاح': 'fixing',
    'المشاكل': 'problems',
    'ادارة قواعد بيانات': 'database administrator',
    'هندسة برمجيات': 'software engineer',
    'تصميم جرافك': 'graphic design',
    'تسويق': 'marketing',
    ' و ': ' and ',
    'الخبرات': 'experiences',
    'مهندس برمجيات': 'software engineer',
    'مطور ويب': 'web developer',
    'مهندس شبكات': 'network engineer',
    'مطور العاب': 'game developer',
    'مطور تطبيقات': 'app developer',
    'مبرمج': 'programmer',
    'استفسار':'Inquiry',
    'لدي':'I have',
    'مهندس':'engineer',
    'مرحبا':'Hi',
    'EN':'AR'
};

// الحصول على الزر ومحتوى النص
const button = document.getElementById('translate-button');
const contentDiv = document.getElementById('contentDiv');
let isTranslated = false;

// وظيفة لتبديل الكلمات بناءً على القاموس
function translateText(text, dictionary, isTranslating) {
    for (let key in dictionary) {
        if (isTranslating) {
            text = text.replace(new RegExp(key, 'g'), dictionary[key]);
        } else {
            text = text.replace(new RegExp(dictionary[key], 'g'), key);
        }
    }
    return text;
}

// وظيفة تبديل النصوص
function toggleTranslation() {
    if (contentDiv && contentDiv.querySelectorAll) {
        contentDiv.querySelectorAll('*').forEach(node => {
            // تجاهل العناصر التي تحتوي على الصف "no-translate"
            if (node.classList.contains('no-translate')) {
                return;
            }

            node.childNodes.forEach(child => {
                if (child.nodeType === Node.TEXT_NODE && child.nodeValue.trim()) {
                    child.nodeValue = translateText(child.nodeValue, dictionary, !isTranslated);
                }
            });

            // معالجة جميع خصائص العنصر
            if (node.nodeType === Node.ELEMENT_NODE) {
                Array.from(node.attributes).forEach(attr => {
                    // تحقق مما إذا كانت الخاصية تحتوي على 'data-typed-items'
                    if (attr.name === 'data-typed-items'||attr.name === 'href') {
                        const attrValue = attr.value;
                        const newAttrValue = translateText(attrValue, dictionary, !isTranslated);
                        node.setAttribute(attr.name, newAttrValue);
                    }
                });
            }
        });
    }
    document.body.dir = isTranslated ? 'rtl' : 'ltr';
    relod1.click();
    // تحديث حالة الترجمة وتغيير نص الزر
    isTranslated = !isTranslated;}

// إضافة مستمع للنقر على الزر لتفعيل وظيفة تبديل النصوص
button.addEventListener('click', toggleTranslation);
// toggleTranslation();