export interface Country {
    name: {
        common: string
    }
}


export interface ICountry {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    NPR?: TartuGecko;
    AUD?: TartuGecko;
    KID?: TartuGecko;
    TMT?: TartuGecko;
    NZD?: TartuGecko;
    EUR?: TartuGecko;
    XOF?: TartuGecko;
    EGP?: TartuGecko;
    HTG?: TartuGecko;
    AZN?: TartuGecko;
    LAK?: TartuGecko;
    USD?: TartuGecko;
    XCD?: TartuGecko;
    SHP?: TartuGecko;
    BGN?: TartuGecko;
    TND?: TartuGecko;
    XAF?: TartuGecko;
    CVE?: TartuGecko;
    MUR?: TartuGecko;
    AED?: TartuGecko;
    BMD?: TartuGecko;
    BYN?: TartuGecko;
    PEN?: TartuGecko;
    SSP?: TartuGecko;
    VUV?: TartuGecko;
    KES?: TartuGecko;
    IDR?: TartuGecko;
    MZN?: TartuGecko;
    DKK?: TartuGecko;
    FOK?: TartuGecko;
    MGA?: TartuGecko;
    PAB?: TartuGecko;
    BAM?: BAM;
    BBD?: TartuGecko;
    GMD?: TartuGecko;
    AMD?: TartuGecko;
    LSL?: TartuGecko;
    ZAR?: TartuGecko;
    GBP?: TartuGecko;
    HKD?: TartuGecko;
    SOS?: TartuGecko;
    COP?: TartuGecko;
    MDL?: TartuGecko;
    BND?: TartuGecko;
    SGD?: TartuGecko;
    YER?: TartuGecko;
    RSD?: TartuGecko;
    DJF?: TartuGecko;
    KRW?: TartuGecko;
    BIF?: TartuGecko;
    UZS?: TartuGecko;
    KMF?: TartuGecko;
    JPY?: TartuGecko;
    ANG?: TartuGecko;
    MKD?: TartuGecko;
    ALL?: TartuGecko;
    CLP?: TartuGecko;
    TOP?: TartuGecko;
    ILS?: TartuGecko;
    JOD?: TartuGecko;
    BZD?: TartuGecko;
    CDF?: TartuGecko;
    ERN?: TartuGecko;
    MXN?: TartuGecko;
    PGK?: TartuGecko;
    PHP?: TartuGecko;
    CZK?: TartuGecko;
    KHR?: TartuGecko;
    ZMW?: TartuGecko;
    DZD?: TartuGecko;
    CNY?: TartuGecko;
    INR?: TartuGecko;
    NOK?: TartuGecko;
    NGN?: TartuGecko;
    AOA?: TartuGecko;
    PYG?: TartuGecko;
    AFN?: TartuGecko;
    GYD?: TartuGecko;
    KPW?: TartuGecko;
    XPF?: TartuGecko;
    GTQ?: TartuGecko;
    SZL?: TartuGecko;
    HNL?: TartuGecko;
    ISK?: TartuGecko;
    QAR?: TartuGecko;
    VND?: TartuGecko;
    KWD?: TartuGecko;
    OMR?: TartuGecko;
    AWG?: TartuGecko;
    BWP?: TartuGecko;
    UGX?: TartuGecko;
    FKP?: TartuGecko;
    PKR?: TartuGecko;
    TRY?: TartuGecko;
    WST?: TartuGecko;
    SLL?: TartuGecko;
    JMD?: TartuGecko;
    TWD?: TartuGecko;
    SDG?: BAM;
    PLN?: TartuGecko;
    IQD?: TartuGecko;
    KGS?: TartuGecko;
    BRL?: TartuGecko;
    FJD?: TartuGecko;
    UAH?: TartuGecko;
    BHD?: TartuGecko;
    GEL?: TartuGecko;
    LYD?: TartuGecko;
    GHS?: TartuGecko;
    UYU?: TartuGecko;
    BTN?: TartuGecko;
    SCR?: TartuGecko;
    MVR?: TartuGecko;
    LRD?: TartuGecko;
    NIO?: TartuGecko;
    MNT?: TartuGecko;
    CHF?: TartuGecko;
    GGP?: TartuGecko;
    CRC?: TartuGecko;
    CUC?: TartuGecko;
    CUP?: TartuGecko;
    HUF?: TartuGecko;
    ETB?: TartuGecko;
    MYR?: TartuGecko;
    JEP?: TartuGecko;
    TJS?: TartuGecko;
    NAD?: TartuGecko;
    SAR?: TartuGecko;
    MAD?: TartuGecko;
    MRU?: TartuGecko;
    TTD?: TartuGecko;
    MOP?: TartuGecko;
    ZWL?: TartuGecko;
    DOP?: TartuGecko;
    ARS?: TartuGecko;
    TVD?: TartuGecko;
    BSD?: TartuGecko;
    BOB?: TartuGecko;
    IRR?: TartuGecko;
    SRD?: TartuGecko;
    SEK?: TartuGecko;
    STN?: TartuGecko;
    LKR?: TartuGecko;
    THB?: TartuGecko;
    TZS?: TartuGecko;
    MMK?: TartuGecko;
    GIP?: TartuGecko;
    IMP?: TartuGecko;
    SBD?: TartuGecko;
    CAD?: TartuGecko;
    SYP?: TartuGecko;
    VES?: TartuGecko;
    LBP?: TartuGecko;
    KYD?: TartuGecko;
    RWF?: TartuGecko;
    RUB?: TartuGecko;
    GNF?: TartuGecko;
    RON?: TartuGecko;
    KZT?: TartuGecko;
    BDT?: TartuGecko;
    MWK?: TartuGecko;
    CKD?: TartuGecko;
}

export interface TartuGecko {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
