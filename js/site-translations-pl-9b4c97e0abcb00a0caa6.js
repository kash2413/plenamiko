!function(e){var a={};function o(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,a,i){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)o.d(i,n,function(a){return e[a]}.bind(null,n));return i},o.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="https://dmbdno5jmf70v.cloudfront.net/pendolino/webpack/",o(o.s=1182)}({1182:function(e,a,o){o(24),o(24),e.exports=o(591)},24:function(e,a,o){(function(e){("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}).SENTRY_RELEASE={id:"15e5d2e460e51e5a14a3c2defe55e7cdee40b124"}}).call(this,o(37))},37:function(e,a){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"==typeof window&&(o=window)}e.exports=o},591:function(e,a){I18n.translations||(I18n.translations={}),I18n.translations.pl=I18n.extend(I18n.translations.pl||{},{activerecord:{attributes:{delivery_address:{address_line:"Adres",apt_number:"Numer mieszkania",apt_number_shortcut:"m.",city:"Miasto",floor:"Piętro",floor_shortcut:"p.",label:"Adres dostawy",post_code:"Kod pocztowy",street:"Ulica",street_number:"Numer domu",street_number_short:"Numer"},order:{cancel_reason:"Powód anulowania zamówienia",confirmation_code:"Kod potwierdzający",corrected_total:"Poprawiona cena",correction_reason:"Powód zmiany ceny",deliver_at:"Zamówienie na",delivery_address:"Adres dostawy: ",delivery_method:"Dostawa (lub odbiór)",delivery_method_type:"Sposób dostarczenia",info:"Dodatkowe informacje dla klienta",ordered_at:"Data",ordering_method:"Zamówienie przez",payment_method_type:"Sposób płatności",print:"Drukuj zamówienie",source:"Zródło",state:"Stan",user:"Klient: "},user:{confirmation_token:"Kod potwierdzający",email:"Email",full_name:"Imie i nazwisko",id:"Id",name:"Imie",parsed_phone:"Tel. komórkowy",password:"Hasło",phone:"Tel. komórkowy",subscribed:"(Zgoda dobrowolna) Wyrażam zgodę na kierowanie do mnie treści marketingowych przez %{company} za pośrednictwem e-mail / SMS / MMS na podane przeze mnie dane kontaktowe. Zgodę można wycofać w każdym czasie poprzez privacy@restaumatic.com",surname:"Nazwisko",tos_agreement:'Potwierdzam zapoznanie się z treścią <a href="#terms_modal" data-toggle="modal" rel="nofollow">Regulaminu</a> oraz <a href="#privacy_modal" data-toggle="modal" rel="nofollow">Polityki prywatności</a>.'}},errors:{models:{delivery_address:{attributes:{address_line:{incomplete:"Adres jest za mało dokładny! Może brakuje numeru ulicy albo nazwy miasta?"},apt_number:{blank:"wypełnij lub odznacz ptaszka!"},street:{invalid:"Podaj ulicę oraz numer domu"}}},order:{attributes:{delivery_address:{delivery_not_possible:"Restauracja %{restaurant} nie dowozi na podany adres"},user:{attributes:{email:{invalid:"Podaj poprawny email",taken:'Email został zajęty. <a href="#login-modal" data-toggle="modal" data-dismiss="modal" class="show-login" ><i class="icon-user"></i> Zaloguj się</a> jeżeli należy do Ciebie'},full_name:{invalid:"Podaj imię i nazwisko"},parsed_phone:{invalid:"Podaj poprawny nr. telefonu "}}},vat_id:{invalid:"Podaj poprawny NIP"}},invalid:"jest nieprawidłowy",max_order_value:"Wartość zamówienia musi być mniejsza niż %{value}",min_order_value:"Wartość zamówienia musi przekraczać %{value} (brakuje %{missing_value})",payment_failure:"Płatność nie powiodła się, prosimy spróbuj ponownie wybierając inną metodę płatności.",payment_too_late:"Bardzo nam przykro, ale otrzymaliśmy płatność za zamówienie z bardzo dużym opóźnieniem",promotion_not_available:"Promocja '%{promo}' jest obecnie niedostępna lub została wykorzystana",restaurant_is_closed:"Restauracja jest już zamknięta!",unavailable:"Następujące z wybranych dań są w tej chwili niedostępne: %{unavailable_dishes}. Prosimy o zmianę zawartości koszyka."},pizza:{attributes:{base:{blank:"Wybierz pizzę bazową!"},topping_ids:{blank:"Pizza nie ma dodanych składników :("},toppings:{blank:"Pizza nie ma dodanych składników :("}},format:"%{attribute} - %{message}"},user:{attributes:{email:{invalid:"Podaj poprawny email",taken:'Email został zajęty. <a href="#login-modal" data-toggle="modal" data-dismiss="modal" class="show-login" ><i class="icon-user"></i> Zaloguj się</a> jeżeli należy do Ciebie'},full_name:{invalid:"Podaj imię i nazwisko"},parsed_phone:{invalid:"Podaj poprawny nr. telefonu "},password:{blank:"Podaj hasło",too_short:"Hasło jest za krótkie, minimum 6 znaków"},tos_agreement:{invalid:"zaznacz zgodę"}}}}}},coupon:{already_used:"Kupon został już wykorzystany",fetch_error:"Wystąpił błąd",invalid:"Błąd w kuponie lub kupony już się skończyły."},coupon_promotion:{default_name:"Kupon promocyjny",success_message:"Kupon poprawny - zniżka dodana do koszyka!"},delivery:{change_restaurant:"Restauracja nie dowozi na podany adres. Prosimy, zmień restaurację na: ",checking_delivery:"Sprawdzam dostawę ...",enter_address:"Podaj adres by poznać cenę dostawy.",geocoding:"Sprawdzam adres ...",geocoding_error:"Podany adres nie istnieje, lub nie jest wystarczająco dokładny",not_possible:"Restauracja nie dowozi na adres: %{address}",select_pickup:'Wybierz opcję "Odbiór własny" (powyżej)'},delivery_info:{cost:"Koszt dostawy: %{cost}",free_threshold:"Dostawa darmowa od: %{free_threshold}",min_order_value:"Minimalna wartość zamówienia: %{min_price}"},delivery_method:{description:{delivery:"Dostawa (zmień)",delivery_to_address:"Dostawa: %{address} (zmień)",dine_in:"Zjem na miejscu (zmień)",pickup:"Odbiór (zmień)",select:"Dostawa/Odbiór (wybierz)"},dine_in:"Zjem na miejscu",dinein:"Bar",locate_me:"Zlokalizuj mnie",no_contact_delivery:"Dostawa bez kontaktu",no_contact_delivery_choice:"Dostawa bez kontaktu (wymagana płatność online)",no_contact_delivery_tooltip:"Zapłać online, a nasz kurier zostawi posiłek na progu Twoich drzwi i zadzwoni lub wyśle Ci SMS z informacją o dostarczeniu.",pickup:"Odbiór własny",shipment:"Dostawa"},delivery_time:{immediate:"Jak najszybciej"},editor:{cancel:"Anuluj",link_editor:{custom_url:"Dowolny adres www",title:"Wskazuje na:"},tag_editor:{confirm:"Wszystkie zmiany zostaną zapisane, a strona przeładuje się.",default:"Domyślnie",title:"Tag:"}},errors:{format:"<strong>%{attribute}</strong> %{message}",messages:{accepted:"musi zostać zaakceptowane",already_confirmed:"już został aktywowany, możesz się zalogować",array_length_at_most:"nie może mieć więcej niż %{length} elementów",at_least_one:"przynajmniej jeden element musi być wybrany",blank:"wypełnij",carrierwave_download_error:"could not be downloaded",carrierwave_integrity_error:"is not of an allowed file type",carrierwave_processing_error:"failed to be processed",cms:{liquid_syntax:"Błąd składni"},confirmation:"nie zgadza się z potwierdzeniem",confirmation_period_expired:"needs to be confirmed within %{period}, please request a new one",empty:"wypełnij",equal_to:"musi być równe %{count}",even:"musi być parzyste",exclusion:"jest zarezerwowane lub nie może być użyte",expired:"stracił ważność, wyślij zapytanie o nowy",extension_black_list_error:"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",extension_white_list_error:"Zły format pliku",greater_than:"musi być większe od %{count}",greater_than_or_equal_to:"musi być większe lub równe %{count}",inclusion:"nie znajduje się na liście dopuszczalnych wartości",invalid:"jest nieprawidłowe",invalid_time_range:"Niepoprawna godzina: %{value}",invalid_vat:"nie jest prawidłowym %{country_adjective} numerem VAT",later_than_start:"Data zakończenia musi następować po dacie rozpoczęcia",less_than:"musi być mniejsze od %{count}",less_than_or_equal_to:"musi być mniejsze lub równe %{count}",mime_types_processing_error:"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",mini_magick_processing_error:"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",not_a_number:"nie jest liczbą",not_an_integer:"musi być liczbą całkowitą",not_found:"nie znaleziono",not_locked:"nie był zablokowany",not_saved:{one:"1 error prohibited this %{resource} from being saved:",other:"%{count} errors prohibited this %{resource} from being saved:"},odd:"musi być nieparzyste",other_than:"musi być inna niż %{count}",present:"nie może być wypełnione",record_invalid:"Negatywne sprawdzenie poprawności: %{errors}",restrict_dependent_destroy:{many:"Nie może zostać usunięte, gdyż istnieją zależne od niego %{record}",one:"Nie może zostać usunięte, gdyż istnieje zależny od niego %{record}"},rmagick_processing_error:"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",taken:"zostało już zajęte",too_long:"jest za długie (maksymalnie %{count} znaków)",too_short:"jest za krótkie (przynajmniej %{count} znaków)",wrong_array_length:"musi mieć %{length} elementów",wrong_length:"ma nieprawidłową długość (powinna wynosić %{count} znaków)"}},first_order_discount:{validation:{alert:{confirm:"Usuń kupon",content:"Modyfikacja powyższych pól spowoduje usunięcie rabatu na pierwsze zamówienie.",warning:"Uwaga!"}},wizard:{claim_button:"Odbierz rabat!",coupon_denied:"Przepraszamy, wygląda na to, że to nie jest pierwsze zamówienie online.",coupon_sent:"Kupon promocyjny wysłaliśmy SMS'em!",header:"Pierwsze zamówienie online?",send_button:"Wyślij!"}},formtastic:{labels:{delivery_address:{additional_info:"Dodatkowe informacje",address_line:"Adres",apt_number:"Numer mieszkania",apt_number_shortcut:"m.",block:"Blok",city:"Miasto",floor:"Piętro",floor_shortcut:"p.",house:"Dom",house_or_block:"Dom/Blok",interphone:"Domofon",label:"Adres dostawy",post_code:"Kod pocztowy",sector:"Sektor",staircase:"Klatka",street:"Ulica",street_number:"Numer domu",street_number_short:"Numer"},order:{confirmation_code:"Wpisz otrzymany kod.",create_invoice:"Potrzebuję faktury",deliver_at:"Zamówienie na",delivery_method_type:"Sposób dostarczenia",override_distance_check:"Realizuj zamówienie, jestem pewien, że restauracja dowozi na mój adres!",payment_method_type:"Sposób zapłaty",user_note:"Uwagi do zamówienia",vat_id:"Numer NIP"}}},generic:{back:"Wstecz",close:"Zamknij",missing:"Brak",none:"Brak"},geolocator:{address_missing:"Błąd w adresie?",error_while_trying_to_get_location:"Błąd podczas pobierania lokalizacji",failed_to_locate:"Nie udało się pobrać adresu przez geolokację"},marketing_consents:{details:"Podanie danych jest dobrowolne. Podstawą przetwarzania danych jest moja zgoda. Uzyskanie zgody jest warunkiem umownym. Odbiorcą danych jest Restaumatic Sp. z o.o. z siedzibą w Zabrzu (41-800) przy ul. Wolności 345 zarejestrowany w Sądzie Rejonowym w Gliwicach, X Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS: 0000416054, NIP: 6482765571, administrujący portalem internetowym pod adresem www.skubacz.pl i www.restaumatic.com oraz dedykowaną aplikacją mobilną pod nazwą Restaurant Operating System – Restaumatic, kontakt privacy@restaumatic.com oraz zaufane podmioty, z którymi administrator ma zawarte umowy o powierzenie przetwarzania danych osobowych. Dane osobowe będą przetwarzane do odwołania zgody, a po takim odwołaniu również przez okres przedawnienia roszczeń przysługujących administratorowi danych i w stosunku do niego. Oświadczam, iż zostałem poinformowany, że, mam prawo wycofania zgody w dowolnym momencie, mam prawo żądania od administratora dostępu do moich danych osobowych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz sprzeciwu wobec przetwarzania danych osobowych oraz, że przysługuje mi prawo wniesienia skargi do organu nadzorczego.",general_consent:"(opcjonalnie) Zgadzam się na przetwarzanie moich danych osobowych w celu marketingu produktów i usług własnych oraz podmiotów współpracujących.",more:"Pokaż informacje o przetwarzaniu.",subscribe_email:"Za pośrednictwem email",subscribe_phone:"Za pośrednictwem połączeń telefonicznych i SMS / MMS"},number:{currency:{format:{delimiter:",",format:"%n %u",precision:2,separator:",",significant:!1,strip_insignificant_zeros:!1,unit:"zł"}}},order:{already_assigned:"Zamówienie jest już przypisane do innego użytkownika: (%{user})",auto_cancel_reason:"To jest restauracja testowa, zamówienia będą automatycznie anulowane",correct_total_text:"%{total} (było %{previous})",coupon:{errors:{online_payment:"Aby skorzystać z kuponu, wymagana jest płatność online. Prosimy o zmianę formy płatności."}},default_cancel_reason:"Przepraszamy, ale z ważnych przyczyn restauracja %{restaurant} nie mogła przyjąć Państwa zamówienia do realizacji",delivery_address:"Adres dostawy",delivery_method:"Sposób realizacji",description:"Zamówienie nr. %{id} w Skubacz.pl",description_site:"Zamówienie nr. %{id} w %{name}",expiry_cancel_reason:"Nie otrzymaliśmy płatności. Gdyby przyszła z opóźnieniem system dokona jej zwrotu. ",max_handling_time_exceeded:"Przekroczono maksymalny czas obsługi zamówienia",name:"Zamówienie",number:"Numer zamówienia",payment_failed:"Płatność nie powiodła się",total:"Suma",total_correction:"Ostateczny koszt zamówienia to %{total} (%{reason})"},orders:{box_poll:{already_paid:"Już oplacono",cash:"Gotówka",customer_service:"Osoba dyżurująca w Skubacz.pl"},cancel_email:{cancel_message:"Przepraszamy! Twoje zamówienie nr %{order_id} zostało anulowane!",cancel_reason_is:"Powód anulowania to",cancel_reason_prefix:"Nie możemy zrealizować zamówienia.",hello_user:"Witaj %{user}!",payment_will_be_returned:"Płatność zostanie zwrócona na państwa konto.",payment_will_be_returned_html:"<strong>Zwrot płatności nastąpi do 3 dni roboczych.</strong>"},checkout:{agreement_html:'Klikając w przycisk "Zamów" akceptujesz <a href="#rules" data-toggle="modal" rel="nofollow">Warunki i regulamin zamówień</a>',back_to_menu:"Zmień zamówienie",blik_code:"Kod BLIK",card:{code:"Kod CVC/CVV",exp_date:"Data ważności",invalidCVV:"Nieprawidłowy kod CVC/CVV",invalidCardData:"Podano nieprawidłowe dane karty płatniczej",invalidExpiration:"Data ważności karty nie jest prawidłowa",invalidNumber:"Podany numer karty jest nieprawidłowy",month:"Miesiąc",name:"Imię i nazwisko na karcie",number:"Numer karty",year:"Rok wygaśnięcia"},close_cart:"Zamknij koszyk",confirmation_code_error:"Problem z wysłaniem kodu! Spróbuj jeszcze raz za chwilkę!",confirmation_code_missing_data:"Podaj poprawny email i telefon!",confirmation_code_sent:"Kod wysłany! Sprawdź telefon!",delivery_notes:"Informacje dla kuriera, o fakturze, terminie dostawy, specjalnych życzeniach, itd...",delivery_time_info_html:"Średni czas dostawy: 45-60 min.",load_error:"Wystąpił błąd podczas ładowania danych zamówienia.",loading:"Ładowanie…",main_guarantee2_html:"%{time}: Aktualnie dyżur pełni: %{admin}",main_guarantee3_html:"Średni czas dostawy pizzy: 45-60 minut",main_guarantee4_html:"Płatność: gotówką przy odbiorze",main_guarantee_html:"<i class='icon-thumb'></i><span>Potwierdzenie</span> SMSem i mailem w 5 minut.",max_length:"Max %{l} znaków",modal:{close:"Zamknij",payments:{title:"Płatności w Skubacz.pl"},rules:{title:"Regulamin Restaumatic Sp. z o.o."}},my_cart:"Mój koszyk",not_found:"Nie znaleziono zamówienia!",payment:{cash:"Gotówka",label:"Metody płatności",online:"Online"},payment_channel:{required:"Wybierz kanał płatności",unable_to_load:"Nie udało się załadować kanałów płatności."},payment_method:{required:"Wybierz metodę płatności"},sending_order:"Wysyłam zamówienie",show_cart:"Koszyk",submit:{content:"Zamów",loading_text:"Zapisuję"},table:{amount:"Ilość",delivery:"Dostawa",description:"Opis",product:"Produkt",subtotal:"Suma",total:"Całkowity koszt"},title:"Koszyk, zamówienie %{order_id} | Skubacz.pl",warning:{apt_number:{content:"Wypełnij numer mieszkania, chyba że nie jest potrzebny!",title:"Wypełniłeś numer mieszkania?"}}},email_accept:{client:"Klient",contact:"Kontakt",delivery_address:"Adres dostawy",delivery_time:"Czas dostawy",delivery_until:"Dostawa zajmie do  %{minutes} (%{delivery_date})",email:"E-mail",goto_homepage:"Przejdź do strony głównej",order_cancelled:"Zamówienie %{order_id} zostało anulowane, co za szkoda :(  Pozdrawiamy - Skubacz.pl",order_error:"Wystąpił problem z otrzymaniem zamówienia %{order_id} - skontaktuj się z nami: contact@restaumatic.com",phone:"Telefon",regards:"Pozdrawiamy - Restaumatic",thanks_for_accepting:"Dziekujemy za potwierdzenie zamówienia numer",title:"Zamówienie %{order_id} | Restaumatic"},exhibit:{asap:"Jak najszybciej",deliver_at:"Na godzine: %{deliver_at}",deliver_at_old:"Zamowienie na godzine: %{deliver_at}",last_review:"Poprzednia opinia tego klienta: %{rating}/5\n%{text}\n",order_in_restaurant:"Zamówienie w restauracji: %{restaurant}",user_orders_count:"(zamawia %{count} raz)"},form:{address_data:"Dostawa",agreement_html:'<strong>Kwota do zapłaty: <span class="total js-order-total">%{total}</span></strong>.\nSkładając zamówienie potwierdzasz akceptację <a href="#terms_modal" data-toggle="modal" rel="nofollow">Regulaminu</a> oraz obowiązek zapłaty.\n',check_marketing:{button:"wyłącz promocje",error:"Użycie wybranej promocji wymaga zgody marketingowej! Zaznacz zgodę lub"},confirmation_code:{button:"Wyślij kod",button_label:"Wyślij SMS'em kod na mój telefon",instructions:"Aby skorzystać z rabatu do pierwszego zamówienia, prosimy potwierdź swój telefon:"},correct_validation_errors:"Popraw dane w formularzu!",delivery:{blank:"Uzupełnij",header:"Dostawa (lub odbiór)",header_no_pickup:"Dostawa"},delivery_notes:"Chcesz wpisać jakieś uwagi? faktura? informacje dla dostawcy? - kliknij tutaj",limited_available_delivery_times:"Czasy dostawy ograniczone tylko do dostępnych dla wybranych dań z harmonogramem",login:"Logowanie",max_length:"Max %{l} znaków",no_user:"Bez tworzenia konta",not_available_delivery_times:"Wybrane dania są niedostępne w godzinach otwarcia restauracji",not_overlapping_delivery_times:"Wybrane dania są dostępne w różnych godzinach i nie mogą być umieszczone w jednym zamówieniu - zmień zawartość koszyka",order_total:'<strong>Kwota do zapłaty: <span class="total js-order-total">%{total}</span></strong>\n',register:"Rejestracja",submit:{content:"Zamów",loading_text:"Zapisuję"},user:{blank:"Uzupełnij",header:"Klient"},user_data:"Dane kontaktowe"},order_info:{address:"Adres",cash_payment:"Gotówką przy odbiorze",client:"Klient",created_at:"Utworzono",deliver_at:"Zamówienie na godzinę",delivery_notes:"Uwagi dla dostawcy",invalidated_at:"Anulowano",invalidated_by:"Anulował",invalidation_reason:"Powód",online_payment:"Płatność już dokonana (online)",order_id:"Numer zamówienia",payment:"Płatność",pickup:"Odbiór własny",user_info:"%{name} Tel: %{phone} Email: %{email}",vat_id:"Numer NIP"},order_summary:{address:"Adres",available_for_pickup_in:"Twoje zamówienie będzie gotowe do odbioru o godzinie",client_data:"Twoje dane:",counter:{hours:"godziny",minutes:"minuty",seconds:"sekundy"},delivery_in:"Twoje zamówienie zostanie dostarczone o godzinie",info:"Uwagi od restauracji:",minutes:"minut",modify:"Zmiana lub anulowanie zamówienia tylko telefonicznie:",next_opening_hour:"Otwieramy się o godz. %{opens_at}. Wtedy otrzymasz potwierdzenie realizacji zamówienia.",payment:"Płatność: %{description}",title:"Zamówienie #%{order_id} złożone! Dziękujemy",user_note:"Uwagi do zamówienia:",vat_id:"Numer NIP"},show:{call_restaurant_if_late:"Jeżeli po zakończeniu odliczania nie będzie dostawcy, prosimy zadzwoń do restauracji i zapytaj co się stało",confirmation_info:"W parę minut potwierdzimy czas dostawy e-mailem i na stronie",delivery_in:"Restauracja dostarczy jedzonko za",dont_close_this_page:"Nie zamykaj tej strony",enjoy:"Życzymy smacznego!",get_discounts:"Zadbaj o więcej zniżek dla siebie i znajomych!",goto_homepage:"Strona główna",goto_order:"Przejdź do podsumowania złożonego zamówienia",invite_friends:"Zaproś znajomych",is_done:"Przed chwilą złożyłeś zamówienie",loyalty:"Program lojalnościowy ",order_cancelled:"Uwaga, zamówienie zostało anulowane",order_cancelled_message:"Najmocniej przepraszamy! %{reason}",order_cancelled_message_po:"Najmocniej przepraszamy! %{reason}. Płatność zostanie zwrócona w ciągu 2-3 dni",order_complete:"Gratulacje, zamówienie złożone!",order_in_different_restaurant:"Zamów w innej restauracji",order_info:"Wiadomość od zespołu Skubacz.pl",per_person:"od osoby",title:"Zamówienie %{order_id} | Skubacz.pl",try_again:"Spróbuj ponownie",we_will_start_the_countdown:"Za chwilę będziemy odliczać czas dostawy!",who_to_invite:"Przyjaciół rodzinę współpracowników",your_balance:"Obecnie masz %{balance} w Skubacz.pl"},sms:{cancel:"Przepraszamy, zamówienie anulowane. %{reason} - %{site}",cancel_with_payment:"Przepraszamy, zamówienie anulowane. %{reason}\nZwrot płatności nastąpi do 3 dni roboczych - %{site}",complete_delivery:"Przyjeliśmy zamówienie! O %{deliver_at} jedzonko powinno być u Ciebie. Smacznego :)-%{site} (sms automatyczny, nie odpowiadaj)",complete_pickup:"Przyjeliśmy zamówienie! Godzina odbioru: %{deliver_at}. Smacznego :)-%{site} (sms automatyczny, nie odpowiadaj)",incorrect_answer:"Zla odpowiedz (%{previous_answer}) na zamowienie %{order_id}. Prosimy odpowiedziec TAK aby zaakceptowac lub NIE aby odrzucić zamowienie-Skubacz.pl",notification:"Prosimy odbierz e-mail, przeslalismy nowe zamowienie!"},summary_table:{additional_cost:"Dopłata",count:"Ilość",delivery:"Dostawa",description:"Opis",order_total:"Całkowity koszt",product:"Produkt",refund:"Zwrot",total:"Suma",unit_price:"Cena/szt."}},payment_method:{card:{description:"Kartą przy odbiorze",label:"Karta przy odbiorze"},cash:{description:"Gotówka",label:"Gotówka"},online:{description:"Płatność online",label:"Szybki przelew"}},payments:{channel:{credit_card:"Karty płatnicze"},error:"Płatność została odrzucona!",form:{adyen:{header:"Zapłać za pomocą karty (Visa, Mastercard...)"},card_info:"Z przyczyn technicznych, płatności kartą nie są obecnie obsługiwane - bardzo przepraszamy za niedogodności!",caution:"Uwaga:",change:"Zmień",dotpay:{header:"Zapłać za pomocą szybkiego przelewu"},loading:"Ładuję...",pay:"Zapłać",payment_info:"Po dokonaniu płatności zostaniesz przekierowany na stronę podsumowania. Płatność może potrwać do 5 minut. Prosimy o cierpliwość.",payment_rules:"regulamin płatności",selected_payment_method:"Wybrana forma płatności",unavailable_header:"Poniższe banki w tej chwili nie obsługują szybkich przelewów:",unavailable_info:"(banki te nie obsługują szybkich przelewów non stop)",you_accept_the_rules_by_clicking:"Klikając przycisk akceptujesz %{link}"},new:{back_to_cart:"Wróc do koszyka",card_header:"Zapłać kartą (Visa, Mastercard ...)",card_info:"Z przyczyn technicznych nie możemy teraz zrealizować płatności kartami - przepraszamy za niedogodności!",caution:"Notatka:",change:"Zmień",loading:"Ładowanie...",pay:"Zapłać",payment_info:"Po dokonaniu płatności nastąpi przekierowanie z powrotem do strony www.skubacz.pl. Płatność może potrwać do 5 minut. Dziękujemy za Twoją cierpliwość.",payment_rules:"Zasady płatności",select_payment_method:"Wybierz czy płacisz kartą czy szybkim przelewem bankowym",selected_payment_method:"Wybrana metoda płatności",title:"Płatność, zamówienie %{order_id} | Skubacz.pl",transfer_header:"Zapłać szybkim przelewem",unavailable_header:"Kanały płatności w tej chwili niedostępne",unavailable_info:"(bank działa w określonych godzinach lub tylko w dni powszednie)",you_accept_the_rules_by_clicking:"Klikając przycisk, zgadzasz się na %{link}"},waiting:{check:"Sprawdź czy płatność wpłynęła",header:"Nie otrzymaliśmy jeszcze płatności",i_didnt_pay:"Nie zapłaciłem",i_paid:"Zapłaciłem",info:"Prosimy o chwilę cierpliwości",not_payed:"Jeżeli nie zapłaciłeś, prosimy zapłać korzystając z przycisku poniżej",pay:"Zapłać",please_pay:"Jeżeli nie dokonałeś jeszcze płatności prosimy zrób to teraz",redirect_info:"Gdy tylko otrzymamy płatność, automatycznie przekierujemy na stronę podsumowania zamówienia",title:"Oczekiwanie na płatność, zamówienie %{order_id} | Skubacz.pl",wait_to_long:"Gdyby oczekiwanie się przedłużało prosimy o kontakt: %{phone}",we_are_waiting:"Czekamy na wpływ płatności"}},pizza:{custom_pizza:"Kompozycja"},promotions:{loyalty_promotion_dialog:{alt:"Program lojalnosciowy !",button:"Ok!",info_new_textile:"Tylko %{required} i będziesz mógł skorzystać z oferty *%{promotion}*!",info_textile:"Tylko %{required} do zdobycia *rabatu %{price}*!",success_message:"Właśnie wysłaliśmy maila z informacją jak wykorzystać rabat %{price} w kolejnym zamówieniu",success_message_new:"Właśnie wysłaliśmy maila z informacją jak wykorzystać ofertę %{promotion} w kolejnym zamówieniu",success_title:"Gratulacje!",title:"Twoje pieczątki"}},restaurants:{hours:{active:"Teraz aktywne",closed:"Teraz zamknięte",holidays:"Zmiany w godzinach pracy",inactive:"Teraz nieaktywne",open:"Teraz otwarte"},menu:{closed_message:"Niestety, restauracja nie przyjmuje w tej chwili zamówień online! :( ",closed_message_hours:"Zamówienia online prosimy składać w godzinach:\n%{hours}\n",opens_in:"Otwiera %{duration}"},select:{header_all:"Wszystkie restauracje",header_deliver:"Te restauracje dowożą na:",header_others:"Pozostałe restauracje",title_find:"Znajdź restaurację dowożącą na Twój adres: ",title_select:"Wybierz restaurację"},widgets:{cart:{checkout:"Do kasy",clear:"Wyczyść",clear_confirmation:"Czy na pewno usunąć zawartość koszyka?",cost_info:"Wybierz sposób realizacji, aby poznać całkowity koszt zamówienia.",delivery:{back:"Wróć do koszyka",cost:"Koszt",header:"Realizacja zamówienia"},empty:"Koszyk jest pusty",hide:"Kontynuuj zakupy",hide_and_continue:"Ukryj koszyk i kontynuuj zakupy",loading_text:"Przechodzę do kasy...",name:"Koszyk",no_coupon_items:"Twój koszyk nie spełnia warunków kuponu.",opening_hour:"Restauracja będzie realizować zamówienia od %{hour}",remove:"Usuń",unavailable:"Niektóre z wybranych dań są obecnie niedostępne:"},cart_items:{coupon_item:{add:"Dodaj",placeholder:"Kod kuponu",remove:"Usuń"},remove:"Usuń"}}},theme_defaults:{consents:{description:"Chcesz wycofać zgody marketingowe?\nNie będziemy wtedy wysyłać Ci informacji o promocjach i rabatach specjalnych.",form:{email:{label:"E-mail"},phone:{label:"Telefon"},submit:"Wypisz się"},success_message:"Wypisanie z subskrybcji przebiegło pomyślnie"},creator:{add_to_cart:"Dodaj do koszyka",base_pizza:"Wybierz pizzę",change_toppings:"Zmień składniki",dough:"Ciasto",hide:"Ukryj",pizza_1st_half:"Połówka 1",pizza_2nd_half:"Połówka 2",pizza_size:"Wielkość pizzy",split_pizza:"Podziel pizzę",stepper:{decrease:"Zmniejsz liczbę %{name} z %{from} do %{to}%{price}",increase:"Zwiększ liczbę %{name} z %{from} do %{to}%{price}"},topping_unavailable_in_size:"Składnik niedostępny w tym rozmiarze"},delivery:{form:{submit:"Sprawdź"}},dish_creator:{add_to_cart:"Do koszyka",cancel:"Anuluj",choose_many:"Wybierz",choose_one:"Wybierz",correct_errors:"Prosimy, popraw błędy.",side:{default_name:"Wybierz (max %{maxSelectedDishes})",existing_name:"%{name} (max %{maxSelectedDishes})",too_many_selected:"Możesz wybrać maksymalnie %{maxSelectedDishes} dodatki!"},title:"Opcje do",total:"Łącznie"},dish_label:{free_toppings:"Dodatkowe składniki za darmo",new:"Nowość",recommended:"Szef kuchni poleca",special:"Oferta specjalna",unavailable:"Teraz niedostępne"},login_modal:{button_facebook:"Zaloguj przez Facebook",button_login:"Zaloguj",button_register:"Nie mam konta",email_label:"E-mail",email_placeholder:"Twój adres e-mail",error_message:"Niepoprawny email lub hasło!",forgot_password:"Zapomniałeś hasła?",password_label:"Hasło",password_placeholder:"hasło do Twojego konta",remember_me:"Zapamiętaj mnie",subtitle:"Używając konta Restaumatic.com lub Skubacz.pl",title:"Zaloguj się"},menu:{add_to_cart:"Do koszyka",allergens:{content_md:"1. Gluten\n2. Skorupiaki\n3. Jaja\n4. Ryby\n5. Orzeszki ziemne\n6. Soja\n7. Mleko\n8. Orzechy\n9. Seler\n10. Musztarda\n11. Sezam\n12. Dwutlenek siarki\n13. Łubin\n14. Mięczaki",label:"Alergeny",labeling:"Oznaczenia alergenów",names:{Celery:"Seler",Crustaceans:"Skorupiaki",Eggs:"Jaja",Fish:"Ryby",Gluten:"Gluten",Lupin:"Łubin",Milk:"Mleko",Molluscs:"Mięczaki",Mustard:"Musztarda",Nuts:"Orzechy",Peanuts:"Orzeszki ziemne",Sesame:"Sezam",Soybeans:"Soja",SulphurDioxide:"Dwutlenek siarki"}},change_toppings:"Zmień składniki i sosy",custom_pizza:{creator_btn:"Stwórz",creator_btn_standalone:"Własna pizza",description:"%{EMPTY}",title:"Własna pizza"},description:"%{EMPTY}",dough:"Ciasto",drinks:"Napoje",edit_pizza:"Zmień",nav:{title:"Menu"},no_photo:"Brak zdjęcia",offers:{close:"Zamknij promocje",description:"Zamawiając przez internet, sam wybierasz promocje!",hide:"Schowaj promocje",offer:"Promocja",show:"Zobacz promocje",title:"Nowość"},pizza:"Pizza",pizza_sizes:{available:"%{size_name} (%{size_cm} cm) jest dostępna",unavailable:"%{size_name} (%{size_cm} cm) jest niedostępna"},price:"Cena",price_from:"od",reveal_phone:"więcej…",show_dish_types:"Dania",split_pizza:{creator_btn:"Stwórz",description:"%{EMPTY}",title:"Pizza pół na pół"},title:"Menu"},modal:{close:"Zamknij",confirm:"OK!"},order_summary:{back:"(Zmień)",cart:"Koszyk",delivery:"Dostawa",price:"Cena",product:"Produkt",quantity:"Ilość",total:"Łącznie"},register_modal:{button_login:"Mam już konto",button_register:"Utwórz konto",email_label:"E-mail",email_placeholder:"Twój adres e-mail",password_label:"Hasło",password_placeholder:"minimum 6 znaków",subtitle:"w systemie Restaumatic.com",title:"Utwórz konto"},reservation:{for_today:"Potrzebujesz stolik na dzisiaj? Zadzwoń:",form:{email:{label:"E-mail"},full_name:{label:"Imię i nazwisko"},num_people:{label:"Liczba osób"},phone:{label:"Telefon"},reservation_date:{label:"Rezerwuję stolik na"},restaurant:{label:"Restauracja"},submit:"Wyślij rezerwację",user_notes:{label:"Uwagi..."}},subtitle:"Wyślij do nas swoją rezerwację",subtitle_small:"potwierdzimy ją w ciągu 24h",success_message:"Rezerwacja została wysłana",title:"Rezerwacja stolika"},summary:{additional_information:"Wiadomość od zespołu:",contact_us:"Gdyby dostawca nie pojawił się po upływie wyznaczonego czasu lub w razie potrzeby anulowania czy modyfikacji zamówienia, prosimy o kontakt telefoniczny (zamówienia nie można anulować mailowo):",online_order_problem:"Jeżeli wystąpił problem z systemem do zamawiania online, prosimy zamów telefonicznie:",order_accepted:"Gratulacje, zamówienie złożone!",order_cancelled:"Uwaga, zamówienie zostało anulowane:",payment_will_be_returned:"Płatność zostanie zwrócona w ciągu 2-3 dni",time_to_delivery:"Czas dostawy:",title:"Zamówienie",try_again:"Spróbuj ponownie",waiting_for_confirmation:"Zaraz zobaczysz zegar z czasem realizacji.<br>Dodatkowo czas realizacji potwierdzimy mailem.",waiting_for_dispatch:"Restauracja otwiera się o godzinie <strong>%{openAt}</strong>. Wtedy otrzymasz potwierdzenie zamówienia mailem i SMSem, a na tej stronie pojawi się zegar z czasem realizacji.",waiting_for_payment:"Oczekujemy na wpływ płatności",waiting_for_payment_message:"Gdy tylko dostaniemy informacje o dokonanej płatności, zamówienie zostanie przesłane do restauracji!",we_are_sorry:"Najmocniej przepraszamy!"},user:{register:"Nowe konto",sign_in:"Zaloguj się"},users:{account:"Konto",login:"Zaloguj Się",logout:"Wyloguj",register:"Nowe konto"}},topping_type:{cheeses:"Sery",meat:"Wędliny i Mięso",meet:"Mięso",sauces:"Sosy",spices:"Przyprawy",vegetables:"Warzywa i Owoce"},validations:{enter_date:"Podaj termin",invalid_email:"Niepoprawny adres email",invalid_phone:"Niepoprawny numer telefonu"}})}});
//# sourceMappingURL=site-translations-pl-9b4c97e0abcb00a0caa6.js.map