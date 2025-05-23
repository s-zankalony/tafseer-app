const hadithPlaylists = [
  {
    name: '1- كِتَابُ بَدْءُ الْوَحْى',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVf0nfqvBrgnIYgZGUVu7W-&feature=shared',
  },
  {
    name: '2- كِتَابُ الْإِيمَانِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVWhzDKiLYDBAyF_V7oL6OQ&feature=shared',
  },
  {
    name: '3- كِتَاب الْعِلْمِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXV7Ryg_KN6eLJLBcEadybu&feature=shared',
  },
  {
    name: '4- كِتَابُ الوُضُوءِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUoCONttNycFiH9wxgXpvdq&feature=shared',
  },
  {
    name: '5- كِتَابُ الْغُسْلِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVD1Nc-n_tZJkz04GBzlkw4&feature=shared',
  },
  {
    name: '6- كِتَابُ الْحَيضِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWgoC8GtIfwVt467sFxDnOt&feature=shared',
  },
  {
    name: '7- كِتَابُ التَّيَمُّمِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVoQlpCvskZVyjh07TvclG3&feature=shared',
  },
  {
    name: '8- كِتَابُ الصَّلاَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVDfGhHAjf0T5vdB32N42ru&feature=shared',
  },
  {
    name: '9- كِتَابُ مَوَاقِيتِ الصَّلاَة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAW1TUzl91eRyG0OjmeGBUkp&feature=shared',
  },
  {
    name: '10- كِتَابُ الْأَذَانِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVPcK3sbU8a8QeJ0188wkXq&feature=shared',
  },
  {
    name: '11- كِتَابُ الْجُمُعَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUVM-ivGC7yYdLwhAVo5W_g&feature=shared',
  },
  {
    name: '12- كِتَابُ صَلاَةِ الْخَوْفِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUXHe5UdnA-opUOhl2Bd3GH&feature=shared',
  },
  {
    name: '13- كِتَابُ الْعِيدَيْنِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWZhTj6oaQQ7BVB0KW-KAJf&feature=shared',
  },
  {
    name: '14- كِتَابُ الْوِتْرِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUhLQyrPBhiLzD-O1OxMa0E&feature=shared',
  },
  {
    name: '15- كِتَابُ الِاسْتِسْقَاءِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXioFfyPDru7PIbbVe2s7Lp&feature=shared',
  },
  {
    name: '16- كِتَابُ الْكُسُوفِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAV01CBAont1VuOgyHyZvvJW&feature=shared',
  },
  {
    name: '17- كِتَابُ سُجُودِ الْقُرْآنِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWpjpk3ME4GTZlHt967-4zM&feature=shared',
  },
  {
    name: '18- كِتَابُ تَقْصِيرِ الصَّلاَة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUA8VmHpZKkuNlgqHg58V88&feature=shared',
  },
  {
    name: '19- كِتَابُ التَّهَجُّدِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVuYI2pNEi7hqI1z74YC7l4&feature=shared',
  },
  {
    name: '20- كِتَابُ فَضْلِ الصَّلَاةِ فِي مَسْجِدِ مَكَّة وَالْمَدِينَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUJtTJgG6YNrO3tUO25vB80&feature=shared',
  },
  {
    name: '21- كِتَابُ الْعَمَلِ فِي الصَّلاَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUS_2Nu9NeY1xcX2qnnt2Gm&feature=shared',
  },
  {
    name: '22- كِتَابُ السَّهْوِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUI-xCOyho9PKgeO11v4_R9&feature=shared',
  },
  {
    name: '23- كِتَابُ الْجَنَائِزِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAW1Gh9eyzXEAUfIGX3_0Msy&feature=shared',
  },
  {
    name: '24- كِتَابُ الزَّكَاةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWqSIql1hc86bVNa-n_QU-f&feature=shared',
  },
  {
    name: '25- كِتَابُ الحَجِّ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXbyUHfq6dRZWOmGwhfZ40R&feature=shared',
  },
  {
    name: '26- كِتَابُ العُمْرَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVnPWKezWxo1GFCga7Zaosx&feature=shared',
  },
  {
    name: '27- كِتَابُ المُحْصَرِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXYSN904VTyhwFWwG0b-pev&feature=shared',
  },
  {
    name: '28- كِتَابُ جَزَاءِ الصَّيْدِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWFwS44vLgfAD6eHl-G0aqm&feature=shared',
  },
  {
    name: '29- كِتَابُ فَضَائِلِ الْمَدِينَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXKGM9nXxTLSPAJVkooBYZ-&feature=shared',
  },
  {
    name: '30- كِتَابُ الصَّوْمِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVNFQKLjDeeFDGu2UyxTObA&feature=shared',
  },
  {
    name: '31- كِتَابُ صَلاَةِ التَّرَاوِيحِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWMiem0_vtu7nYLTQnVeHu1&feature=shared',
  },
  {
    name: '32- كِتَابُ فَضْلِ لَيْلَةِ القَدْرِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXV9afo90aOrVyEKzpRHJ7K&feature=shared',
  },
  {
    name: '33- كِتَابُ الِاعْتِكَافِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXtC9qYtc2Msfwynwp_iXqx&feature=shared',
  },
  {
    name: '34- كِتَابُ البُيُوعِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAULu0YIyzS0UPzaqC3GpCRv&feature=shared',
  },
  {
    name: '35- كِتَابُ السَّلَمِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVJfrweQd1U6tuzEdqJoSW9&feature=shared',
  },
  {
    name: '36- كِتَابُ الشُّفْعَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWisaNgTuXxiQ6i_dK3s-Ys&feature=shared',
  },
  {
    name: '37- كِتَابُ الإِجَارَة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVA1YGN_I7XCjpgOR9mbYt_&feature=shared',
  },
  {
    name: '38- كِتَابُ الحَوَالَة',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAU954Lmm5YjvmM5hrYc7Vaz&feature=shared',
  },
  {
    name: '39- كِتَابُ الْكَفَالَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAU7FEm92PKJJ2sbnreTSu0M&feature=shared',
  },
  {
    name: '40- كِتَابُ الوَكَالَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUsxaj7_igJ0mc_4XGH9T7t&feature=shared',
  },
  {
    name: '41- كِتَابُ الْمُزَارَعَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWZjWgUzAB3xU7mzOscsLGS&feature=shared',
  },
  {
    name: '42- كِتَابُ الْمُسَاقَاةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWVDar97cWw-jh6cu4juPQr&feature=shared',
  },
  {
    name: '43- كِتَابُ الِاسْتِقْرَاضِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVbdqCel6HowoFyx4h0n-p6&feature=shared',
  },
  {
    name: '44- كِتَابُ الْخُصُومَاتِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVfXlXXdKBFPOXorsbtM-dM&feature=shared',
  },
  {
    name: '45- كِتَابُ اللُّقَطَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAV0PMW_K7xdNDneVWs8XVeQ&feature=shared',
  },
  {
    name: '46- كِتَابُ الْمَظَالِمِ وَالْغَصْبِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVh-kv0ZtItPbfd1HGe2lem&feature=shared',
  },
  {
    name: '47- كِتَابُ الشَّرِكَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXo3NS6b08cvWSigWqxOM8E&feature=shared',
  },
  {
    name: '48- كِتَابُ الرَّهْنِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXkRfOFpQEWLkHZSQaSNwZH&feature=shared',
  },
  {
    name: '49- كِتَابُ الْعِتْقِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXOC28nilYrYDmpulm8bFXi&feature=shared',
  },
  {
    name: '50- كِتَابُ الْمَكَاتِبِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWR-scAbwPqyvrxnUW39fTu&feature=shared',
  },
  {
    name: '51- كِتَابُ الْهِبَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAX5klEpcNjJASnWpAcy5pn0&feature=shared',
  },
  {
    name: '52- كِتَابُ الشَّهَادَاتِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVIPOF6-naDyzTzTixtMaig&feature=shared',
  },
  {
    name: '53- كِتَابُ الصُّلْحِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUH-tiEcLaCXSnsW8jRrzYC&feature=shared',
  },
  {
    name: '54- كِتَابُ الشُّرُوطِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAX8ANmonGlq0Dm3cBNXluAX&feature=shared',
  },
  {
    name: '55- كِتَابُ الْوَصَايَا',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVellpKvJmzix2jgGy3AcgW&feature=shared',
  },
  {
    name: '56- كِتَابُ الْجِهَادِ وَالسِّيَرِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVI9z-Sm_TRavYApbVCO0X7&feature=shared',
  },
  {
    name: '57- كِتَابُ فَرْضِ الْخُمُسِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUREJmYLopWsNnJoG6c-HZR&feature=shared',
  },
  {
    name: '58- كِتَابُ جِزْيَةِ وَالْمُوَادَعَةِ\nمَعَ أَهْلِ الذمَّةِ والْحَرْبِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAV81hIXQ1H7YH5q0KT1Aj6F&feature=shared',
  },
  {
    name: '59- كِتَابُ بَدْءِ الْخَلْقِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUi-l17577UKJZLKQOlpd_5&feature=shared',
  },
  {
    name: '60- كِتَابُ أَحَادِيثِ الْأَنْبِيَاءِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVpfGGEyfrPKUFdwBO6V2ST&feature=shared',
  },
  {
    name: '61- كِتَابُ الْمَنَاقِبِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAX3ZhqTZlJ2fCmbJ_Do_i6y&feature=shared',
  },
  {
    name: '62- كِتَابُ فَضَائِلِ أَصْحَابِ النَّبِيِّ\nصَلَّى اللهُ عَلَيْهِ وَسَلَّمَ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXsjEb2XDLE1_nNcxBTwsNH&feature=shared',
  },
  {
    name: '63- كِتَابُ مَنَاقِبِ الأَنْصَارِ',
    url: 'ضِمْنَ كِتَابُ فَضَائِلِ أَصْحَابِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ',
  },
  {
    name: '64- كِتَابُ الْمَغَازِى',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAU8xEG4jB3s-19mc-JI_HFa&feature=shared',
  },
  {
    name: '65- كِتَاب تَفْسِيرِ الْقُرْآنِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVUDPitNud6p3Toitcnc1tK&feature=shared',
  },
  {
    name: '66- كِتَابُ فَضَائِلِ الْقُرْآنِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAW0ya_DJ1Nit3kMFhOePyD0&feature=shared',
  },
  {
    name: '67- كِتَابُ النِّكَاحِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWO1bB0LOr6fLnOMXfAptwT&feature=shared',
  },
  {
    name: '68- كِتَابُ الطَّلاَقِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXOf_yHSSYWJSEbuRcXprQb&feature=shared',
  },
  {
    name: '69- كِتَابُ النَّفَقَاتِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWX_7DuLoMCuJvSk4E9Kb6y&feature=shared',
  },
  {
    name: '70- كِتَابُ الْأَطْعِمَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWMp-9Z-fuJVk9IHVxte3R7&feature=shared',
  },
  {
    name: '71- كِتَابُ الْعَقِيقَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVk7Bsl3Orv2zovbaVIivH3&feature=shared',
  },
  {
    name: '72- كِتَابُ الذَّبَائِحِ وَالصَّيْدِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUAtMXCAS2S4JCVC4XG9Kxp&feature=shared',
  },
  {
    name: '73- كِتَابُ الْأَضَاحِى',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVDeQBgIySxhItGM37Rr_HC&feature=shared',
  },
  {
    name: '74- كِتَابُ الْأَشْرِبَةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVcllabaDkwQDP8g5TLrZkH&feature=shared',
  },
  {
    name: '75- كِتَابُ الْمَرْضَى',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUxjireYz9WL9-59L4D12PK&feature=shared',
  },
  {
    name: '76- كِتَابُ الطِّبِّ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVk8kXdlqlHf6xTSUMhwn5z&feature=shared',
  },
  {
    name: '77- كِتَابُ اللِّبَاسِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWR4ifN_nOIyZEn0mNImpsL&feature=shared',
  },
  {
    name: '78- كِتَابُ الْأَدَبِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVmQw8LzWDbzXHI3qd42n00&feature=shared',
  },
  {
    name: '79- كِتَابُ الِاسْتِئْذَانِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAW20ldWDrINoKhKiYBoiBOu&feature=shared',
  },
  {
    name: '80- كِتَابُ الدَّعَوَاتِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUYILcvrRHjDrlDZ8DyrDA-&feature=shared',
  },
  {
    name: '81- كِتَابُ الرِّقَاقِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUVMVcwzdrFvxinXyJwVWUE&feature=shared',
  },
  {
    name: '82- كِتَابُ الْقَدَرِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUd_FhROg1WeJ22R_y-_0Br&feature=shared',
  },
  {
    name: '83- كِتَاب الْأَيْمَانِ وَالنُّذُورِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVIRQch1F2pO3gylj6uksOq&feature=shared',
  },
  {
    name: '84- كِتَابُ كَفَّارَاتِ الأَيْمَانِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAXNzw8tCI-49EnrrxxT-LDK&feature=shared',
  },
  {
    name: '85- كِتَابُ الفَرَائِضِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUNVjVRgEd1PjRjd0NTwpnJ&feature=shared',
  },
  {
    name: '86- كِتَابُ الحُدُودِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWLni3YOCeVcEc8RvhdnnGr&feature=shared',
  },
  {
    name: '87- كِتَابُ الدِّيَاتِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAU4g4y7laEThpBjqoN03fLV&feature=shared',
  },
  {
    name: '88- كِتَابُ اسْتِتَابَةِ \nالْمُرْتَدِّينَ وَالْمُعَانِدِينَ وَقِتَالِهِمْ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUfIQfkOIJUIFjMAL5spiEN&feature=shared',
  },
  {
    name: '89- كِتَابُ الإِكْرَاهِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVzhIeU7uRSN8RblgF5AQPz&feature=shared',
  },
  {
    name: '90- كِتَابُ الْحِيَلِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAW51YqcYt9WVIp37WR_PJcj&feature=shared',
  },
  {
    name: '91- كِتَابُ التَّعْبِيرِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVhFXbd_e86BjxM4xOf529b&feature=shared',
  },
  {
    name: '92- كِتَابُ الْفِتَنِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUCVS82vXUD69nremcBUQw1&feature=shared',
  },
  {
    name: '93- كِتَابُ الأَحْكَامِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAUCOJXO36LJXVvD0kYKD7YX&feature=shared',
  },
  {
    name: '94- كِتَابُ التَّمَنِّى',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVJnVhcoOdShUs__Q59qc7V&feature=shared',
  },
  {
    name: '95- كِتَابُ أَخْبَارُ الْآحَادِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVP1arozMI2m8-qSHoyqdyE&feature=shared',
  },
  {
    name: '96- كِتَابُ الِاعْتِصَامِ \nبِالْكِتَابِ وَالسُّنَّةِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAWVZduQZa5onsBI_NOlW1-M&feature=shared',
  },
  {
    name: '97- كِتَابُ التَّوْحِيدِ',
    url: 'https://youtube.com/playlist?list=PLkwhWrnJjHAVjh3xLmPGek9qoVqKkhAni&feature=shared',
  },
];

export default hadithPlaylists;
