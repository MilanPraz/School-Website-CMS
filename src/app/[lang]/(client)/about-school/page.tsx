import Breadcrum from "@/components/common/Breadcrum";
import { Lang } from "@/types";
import React from "react";

export default function page({ params }: { params: { lang: Lang } }) {
  const heading =
    params.lang === "en" ? "About School" : "विद्यालयको पृष्ठभूमि";
  return (
    <div>
      <Breadcrum bg="/about/about-school.png" heading={heading} />

      <div className=" my-8 space-y-20 px-4 ">
        {/* DESCRIPTION OF SCHOOL */}
        <div className=" mx-auto  max-w-5xl space-y-2 text-justify text-sm leading-7  tracking-wide">
          <span className="text-3xl font-bold">
            विद्यालयको ऐतिहासिक पृष्ठभूमि:
          </span>{" "}
          <p className="text-lg ">
            नेपालको सुदुरपूर्वको सुन्दर पहाडी जिल्ला इलामको सदरमुकामबाट ४७
            किलोमिटर पश्चिममा रहेको साविक एकतर्फा हाल फाकफोकथुम गाउँपालिका वडा
            नं. ६ र ७ को संगम रमणीय स्थल शिकारिमा अवस्थित श्री सिंहदेवी माध्यमिक
            विद्यालय, फाकफोकथुम–७, एकतर्फाको ऐतिहासिक पृष्ठभूमि फरक र फराकिलो
            प्रकृतिको पाइन्छ।
          </p>
          <p className="text-lg ">
            वि.सं. २००७ सालको क्रान्तिपछि धेरैमा शैक्षिक चेतना आए पश्चात् वि.सं.
            २००८ सालमा साविक एकतर्फा ४ निवासी गंगाय पण्डित तारानाथ पौडेलले आफ्नै
            घरमा केही ब्राह्मण, क्षेत्री, राई र लिम्बूका छोराछोरीहरुलाई अक्षर,
            चिठ्ठी पढाउने र तमसुक लेख्न सिकाई विद्यालयको सुरुवात गर्नु भएको
            थियो। आफ्नो घरमा पठनपाठन गराउँदै गर्दा पढ्ने चेलाहरु धेरै भएपछी
            निजकैको आफ्नै बारीमा पातीले बारेर सानो कटेरो निर्माण गरेर पढाउन
            थाल्नुभयो। त्यहाँ पनि जमीन साँगुरो भएपछी वि.सं. २०१४ सालमा स्थानीय
            गंगाय हर्कसाद भण्डारीले स्थानीय रामसिंह राईसँग जग्गा मागी शिकारिमा
            पातीले बारेर कटेरो निर्माण गरी विधिवत पाठशाला सञ्चालन गर्नुभयो।
            गंगाय हर्कसाद भण्डारीको नेतृत्वमा गंगाय तारानाथ पौडेल लगायत स्थानीय
            बुद्धिजीवीहरुको सहयोगमा शिकारिमा सञ्चालित विद्यालयको नाम श्री
            हर्कउदय प्राथमिक विद्यालय राखी भूमिदान र चन्दा संकलन गरी
            शिक्षकहरुलाई तलबभत्ताको व्यवस्था गरिएको कुरा स्थानीय बुढापाकाहरु
            बताउनुहुन्छ। यसै सन्दर्भमा तत्कालीन सांसद गणेशसिंह रजालले श्री
            हर्कउदय विद्यालयलाई मान्यता दिलाएका थिए। कक्षा ५ सम्म सञ्चालित यो
            विद्यालयको विद्यालय सहयोग समितिमा श्री हर्कसाद भण्डारी सेक्रेटरी र
            सदस्यहरुमा श्री तारानाथ पौडेल, श्री नेगेन्द्र खनाल, श्री डम्बरसिंह
            खड्का, श्री लालबहादुर भुजेल, श्री नरसिंह अधिकारी र श्री कुञ्जाखर
            खनाल कोषाध्यक्ष पदमा रही विद्यालयको चौतर्फी विकास गर्न काम अगाडि
            बढाउनुभयो। गंगाय श्री हर्कसाद भण्डारी, श्री तारानाथ पौडेल र श्री
            नेगेन्द्र लिम्बुको नेतृत्वमा साथै अन्य सहयोग समितिको सहयोगमा
            विद्यालय सञ्चालन हुँदै गर्दा वि.सं. २०२६ सालमा तत्कालीन प्राथमिक
            तहलाई अपग्रेडको लागि तत्कालीन प्रधानाध्यापक श्री तुलसीराम शर्माले
            आर्थिक योजना सुरु गरी सोही अवधिमा श्री हर्कउदय प्रा.वि. लाई मिडल
            स्कूलको रूपमा सञ्चालन गर्नुभयो। वि.सं. २०२८ सालमा राष्ट्रिय शिक्षा
            प्रणालीको योजना लागू भएपछि यस विद्यालयको नाम परिवर्तन गरी श्री
            सिंहदेवी निम्न माध्यमिक विद्यालय रहन गयो। यसै क्रममा वि.सं. २०३३
            देखि २०४३ साल सम्म तत्कालीन विद्यालय व्यवस्थापन समितिका अध्यक्ष श्री
            नेगेन्द्र लिम्बुको नेतृत्व र विद्यालयका प्रधानाध्यापक श्री जगत
            बोहराको संयोजकत्वमा साविक एकतर्फा गाविसका सम्पूर्ण अभिभावकहरुको
            समर्थन सहयोगमा खेलमैदानको निर्माण कार्य सम्पन्न भयो। जसबाट आज पनि यस
            क्षेत्रका सम्पूर्ण खेलप्रेमीहरु लाभान्वित भएका छन्। वि.सं. २०४६
            सालमा तत्कालीन विद्यालय व्यवस्थापन समितिका अध्यक्ष श्री गोविन्दसिंह
            कोइरालाको नेतृत्वमा निम्न माध्यमिक विद्यालयलाई माध्यमिक बनाउने
            क्रमका रुपमा कक्षा ८ सञ्चालन सुरु गरियो। यो माध्यमिक तह बनाउने
            क्रममा अध्यक्ष श्री गोविन्दसिंह कोइराला, प्रधानाध्यापक श्री हर्कसाद
            प्रधान, श्री तारानाथ पौडेल, श्री जयनारायण भण्डारी, श्री धनबहादुर
            भण्डारी, श्री भीम खनाल, श्री तीर्थराज मैनाली, श्री नेगेन्द्र खनाल,
            श्री केदारनाथ खनाल, श्री पहलमान कोइराला, श्री चन्द्रबहादुर श्रेष्ठ,
            श्री विद्यापति नेपाल लगायतले आर्थिक सहयोग जुटाउने क्रममा आम
            अभिभावकहरुको ठूलो योगदान रहेको छ। वि.सं. २०४८ सालमा यस विद्यालयबाट
            पहिलो पटक एसएलसी परीक्षामा ७ जना विद्यार्थीहरु उतीर्ण भएका थिए।
            <br />
            <br />
            यहाँका अभिभावकहरुको निरन्तर चन्दा सहयोगमा वि.सं. २०५१ सालदेखि
            विद्यालय निजी सरहमा सञ्चालन भयो। वि.सं. २०५२ सालमा विद्यालय माध्यमिक
            तह मान्यता प्राप्त भई शिक्षक दरबन्दीहरु प्राप्त भएपछि विद्यालय
            सञ्चालनमा सहजता सृजना भयो। शिक्षा प्रति नेतृत्व वर्गको उच्च आकांक्षा
            एवं समुदायको सहयोगका कारण तत्कालीन विद्यालय व्यवस्थापन समितिका
            अध्यक्ष श्री रामकुमार श्रेष्ठ र प्रधानाध्यापक श्री नेगेन्द्रराज
            उप्रेतीको नेतृत्व साथै शिक्षा प्रेमी श्री भीम खनाल लगायतका
            अभिभावकहरुको सहयोगमा वि.सं. २०६३ सालदेखि उच्च माध्यमिक तह (११-१२)
            सञ्चालन भैरहेको छ। उच्च माध्यमिक तहको शिक्षाले मात्र यहाँका शिक्षा
            प्रेमी, समाजसेवी तथा अभिभावकहरुलाई सन्तुष्ट गर्ने मात्र होइन, आजको
            यस क्षेत्रको आवश्यकता महसुस गरी शिक्षा प्रति इच्छाशक्ति र तृष्णालाई
            पूरा गर्न वि.सं. २०६८/०८/२८ गते यस ठाउँमा एकतर्फा बहुउद्देश्यीय
            क्याम्पस समेत सञ्चालनमा रहेको छ।
          </p>
          <div className="py-6">
            <h3 className="text-2xl font-semibold"> भौगोलिक अवस्थिति:</h3>
            <p className="mt-2 text-lg">
              इलाम जिल्लाको सदरमुकाम इलामबाट ४७ किलोमिटर पश्चिम २६ डिग्री, २८
              मिनेट १.५ सेकेन्ड उत्तरी अक्षांशदेखि १७ डिग्री ५ सेकेन्ड उत्तरी
              अक्षांश र ८७ डिग्री ४७ मिनेट १८ सेकेन्ड पूर्वी देशान्तरदेखि ८७
              डिग्री ४९ मिनेट १३ सेकेन्ड पूर्वी देशान्तरमा अवस्थित साविक एकतर्फा
              गाविस हाल फाकफोकथुम गाउँपालिका वडा नं. ६ र ७ को संगम स्थल शिकारिमा
              यो विद्यालय अवस्थित छ। करीव २३.४२ वर्ग किलोमिटर क्षेत्रफल भएको यो
              एकतर्फा समुन्द्री सतहबाट ५३० मिटरदेखि १९५९ मिटर सम्मको उचाइमा
              फैलिएको छ। यो श्री सिंहदेवी माध्यमिक विद्यालय समुन्द्री सतहदेखि
              करीव १४८६ मिटरको उचाइमा रहेको छ। पूर्वमा देउमाई खोला, पश्चिममा
              तिवा खोला र फाकफोक खोलाको बीचमा रहेको यो एकतर्फा उत्तरतर्फ फराकिलो
              र दक्षिण तर्फ साँगुरो हुँदै गएको छ। समतलमा सलामी तथा समथर भू–बनोट
              भएको फाकफोकथुम गाउँपालिका वडा नं. ६ र ७ मा लेकदेखि फाँटलो उपजाऊ
              भूमि भएको बाहुल्य समेत रहेको छ। धेरै हरियाली र जैविक विविधता समेत
              रहेको यस एकतर्फामा मिश्रित किसिमको हावापानी पाइन्छ।
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-2xl font-semibold"> विद्यालय समुदायको बनोट:</h3>
            <p className="mt-2 text-lg">
              यस श्री सिंहदेवी माध्यमिक विद्यालय (१-१२) को सेवा क्षेत्रभित्र
              ब्राह्मण, क्षेत्री, राई, लिम्बू, नेवार, गुरुङ, तामाङ, भुजेल र दलित
              भएको मिश्रित बसोबास रहेको छ। सबै जातजातीले आ-आफ्नो परम्परा
              अनुसारको धर्म, संस्कृति अनुसारका चाडपर्वहरु मनाउँछन्। जातीय,
              धार्मिक, भाषिक, सांस्कृतिक विविधता भए तापनि धार्मिक सहिष्णुता,
              आपसी सद्भाव र एकता यहाँको विशेषता हो।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
