const playlists = [
  {
    id: 1,
    sura: 'الفاتحة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXPBfom0ErcWwKeAk39uVoS',
  },
  {
    id: 2,
    sura: 'البقرة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXTON8bB5ZuVjyay_5b9-Fa',
  },
  {
    id: 3,
    sura: 'آل عمران',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAU5afm4bb-Wqel0kdLtBdCE',
  },
  {
    id: 4,
    sura: 'النساء',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAU2jhjf8YIJSVIJj3OyZ-cE',
  },
  {
    id: 5,
    sura: 'المائدة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUytDsmeSQC2RLFltw6Iq3C',
  },
  {
    id: 6,
    sura: 'الأنعام',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWYjTwUybhtAhRZfBQqakd3',
  },
  {
    id: 7,
    sura: 'الأعراف',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXWX33b4oPc4ms3P_W8ArTj',
  },
  {
    id: 8,
    sura: 'الأنفال',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVyysq1Gj0JrBBMXR-_Ke7z',
  },
  {
    id: 9,
    sura: 'التوبة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXzoSjwiuA2D1SKS1yTewGz',
  },
  {
    id: 10,
    sura: 'يونس',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWOlt0Gkq-QMCWblWNAM--m',
  },
  {
    id: 11,
    sura: 'هود',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAV7Og8ZCFT45Dlm7XborwiZ',
  },
  {
    id: 12,
    sura: 'يوسف',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVh4ea-sXJtUftHNw-UOXwT',
  },
  {
    id: 13,
    sura: 'الرعد',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAW_xDFP44ZD9AmbGSy_H-HP',
  },
  {
    id: 14,
    sura: 'إبراهيم',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUdlH5MguJV3Whiusc8xx-B',
  },
  {
    id: 15,
    sura: 'الحجر',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWJq_00frJvpeC3zgwBxUeY',
  },
  {
    id: 16,
    sura: 'النحل',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVsAmNn_P0ylUQ4JwIik792',
  },
  {
    id: 17,
    sura: 'الإسراء',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUYKssque0cgpjabEEB7puN',
  },
  {
    id: 18,
    sura: 'الكهف',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUgXscHtrJmU_ojx3MpZ083',
  },
  {
    id: 19,
    sura: 'مريم',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUlB5Pc2EMylS6NFKvg4xvu',
  },
  {
    id: 20,
    sura: 'طه',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWA1O9HdGOD0lbR3jK65MD6',
  },
  {
    id: 21,
    sura: 'الأنبياء',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXDkiH69tYpSzIuwzsSwQnM',
  },
  {
    id: 22,
    sura: 'الحج',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXK3u-vX4F_SzUHRO8auckJ',
  },
  {
    id: 23,
    sura: 'المؤمنون',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWDkjNj9kh19_gap6n4cWN1',
  },
  {
    id: 24,
    sura: 'النور',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWyQTmR1Ugw-hWEtzWhVRzB',
  },
  {
    id: 25,
    sura: 'الفرقان',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWv1zYvJQHlO_aKiyMVT5MA',
  },
  {
    id: 26,
    sura: 'الشعراء',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWKe7vqlVbWW2G9ndkACpaL',
  },
  {
    id: 27,
    sura: 'النمل',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXbrDfx8zyR_O6nj8aJyh8i',
  },
  {
    id: 28,
    sura: 'القصص',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUXI3H476SOr75ale7TlJ5U',
  },
  {
    id: 29,
    sura: 'العنكبوت',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVGcEzuFVFJ3qS4vzcau7RJ',
  },
  {
    id: 30,
    sura: 'الروم',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUj7FFcp_M0lXU0_kw9AT7s',
  },
  {
    id: 31,
    sura: 'لقمان',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVJyk3mo3hvyEnSsclQZDTT',
  },
  {
    id: 32,
    sura: 'السجدة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVgbDst1gF8enRPei-XA-vm',
  },
  {
    id: 33,
    sura: 'الأحزاب',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAU5NMN7Mv2U6IRldFSCtKyI',
  },
  {
    id: 34,
    sura: 'سبأ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVEDQ6-v8GHUvoal7XYPapq',
  },
  {
    id: 35,
    sura: 'فاطر',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAX8QPnTRyj7lqpqWgCqEZm3',
  },
  {
    id: 36,
    sura: 'يس',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUMCXYDHR20hP9TNOSLwWxI',
  },
  {
    id: 37,
    sura: 'الصافات',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUg0Yfdw2XF1L6zJlQJd6Wh',
  },
  {
    id: 38,
    sura: 'ص',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXNEYU37cruoKQOF4rRG2tB',
  },
  {
    id: 39,
    sura: 'الزمر',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWfic-SQ8kxOeAcEmqX-bwH',
  },
  {
    id: 40,
    sura: 'غافر',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXySJNZkPgtaRorWv27wEwl',
  },
  {
    id: 41,
    sura: 'فصلت',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVPBrSfBD2aA9gDHSFy2zlv',
  },
  {
    id: 42,
    sura: 'الشورى',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVlZXAra9X3Rt0CGuJh10xq',
  },
  {
    id: 43,
    sura: 'الزخرف',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXBVREDDxrHvWu0GvvBhMHG',
  },
  {
    id: 44,
    sura: 'الدخان',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXY9ya34IdXYQC6sgJQNZ-i',
  },
  {
    id: 45,
    sura: 'الجاثية',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUeFYPk9nd4rQ1gpPph7on1',
  },
  {
    id: 46,
    sura: 'الأحقاف',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUXblpkHBqSj4ll5njqjfSU',
  },
  {
    id: 47,
    sura: 'محمد',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAU4WujOIN4U4CiqY9gB8wY7',
  },
  {
    id: 48,
    sura: 'الفتح',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXbxrKei6J4jXNHMYs53eIw',
  },
  {
    id: 49,
    sura: 'الحجرات',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWQm6Sp8rQyNnzEcO4JUpb7',
  },
  {
    id: 50,
    sura: 'ق',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXNa8foryO-lY8sG82Cv93A',
  },
  {
    id: 51,
    sura: 'الذاريات',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVn23pscsb7hs2eRzjt4fWZ',
  },
  {
    id: 52,
    sura: 'الطور',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXTSb3wtlyCH7zE3-OXHaa1',
  },
  {
    id: 53,
    sura: 'النجم',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWOTu-4KSWf3RT_7j4XlpxR',
  },
  {
    id: 54,
    sura: 'القمر',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXn0XGts-379suExM83e6QS',
  },
  {
    id: 55,
    sura: 'الرحمن',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVuvp9GmBYvMIAX8ERkMXjQ',
  },
  {
    id: 56,
    sura: 'الواقعة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXxncSUrPp-Ut_eXOwCcAJ_',
  },
  {
    id: 57,
    sura: 'الحديد',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXQEDoAewfgn95G2id5WQpR',
  },
  {
    id: 58,
    sura: 'المجادلة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAU46fyr_iiFq71c5Gprnccn',
  },
  {
    id: 59,
    sura: 'الحشر',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVVJL4EnfmE2SnUzLDQJja4',
  },
  {
    id: 60,
    sura: 'الممتحنة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXEcHQ12n7Sa37zMXRaQaqw',
  },
  {
    id: 61,
    sura: 'الصف',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVrtdhDHod9W0GVtImZbEd4',
  },
  {
    id: 62,
    sura: 'الجمعة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWti4-cDotey4EuYuJ3G-XG',
  },
  {
    id: 63,
    sura: 'المنافقون',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXk48ZocTiICGEyI8FiMgiL',
  },
  {
    id: 64,
    sura: 'التغابن',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXEtxhYKYBZl_Th5r8sVWjH',
  },
  {
    id: 65,
    sura: 'الطلاق',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWd5iZAcfPcfOl4kcGTIQHD',
  },
  {
    id: 66,
    sura: 'التحريم',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXGTyL3-UB-W3c0DIlFYoWb',
  },
  {
    id: 67,
    sura: 'الملك',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXzFv1Qg5CMNj4QpXbHzZfW',
  },
  {
    id: 77,
    sura: 'القلم',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWnp90c7TKiriufWU_ZAYSS',
  },
  {
    id: 78,
    sura: 'الحاقة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWqY7WHnbJEIgSGVspQlAXB',
  },
  {
    id: 79,
    sura: 'المعارج',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAU23YdfA3IZiDzshDX27mxB',
  },
  {
    id: 80,
    sura: 'نوح',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVNp-R6NWXW7z4tUagcrDx1',
  },
  {
    id: 81,
    sura: 'الجن',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAU7-1pkFaxzR22Z5TWPvf47',
  },
  {
    id: 82,
    sura: 'المزمل',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXTehHR-w__fHlKDqkEitkl',
  },
  {
    id: 83,
    sura: 'المدثر',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAV578H0u4GBVn3XZvfCvmfy',
  },
  {
    id: 84,
    sura: 'القيامة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWKGxjA-Jn-8kjJ9t2DTDZi',
  },
  {
    id: 85,
    sura: 'الإنسان',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVsDF1z3MRtPfwSr2czu2lT',
  },
  {
    id: 86,
    sura: 'المرسلات',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAX86b2TRK_JZuzk0CmTmZdN',
  },
  {
    id: 87,
    sura: 'جزء عم',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAV-4tUU8gYDKYXI_EHRVk4b',
  },
];

export default playlists;
