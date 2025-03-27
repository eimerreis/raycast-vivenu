export interface VivenuTicketsResponse {
  rows: Row[];
  total: number;
}

export interface Row {
  _id: string;
  name: string;
  transactionId: string;
  ticketTypeId: string;
  triggeredBy: unknown[];
  currency: Currency;
  status: TicketStatus;
  type: RowType;
  deliveryType: DeliveryType;
  entryPermissions: unknown[];
  personalized: boolean;
  expired: boolean;
  excludedEventIds: unknown[];
  claimed: boolean;
  addOns: unknown[];
  capabilities: unknown[];
  _locks: unknown[];
  history: History[];
  secret: string;
  eventId: string;
  sellerId: string;
  ticketName: Name;
  categoryName: Name;
  categoryRef: string;
  realPrice: number;
  regularPrice: number;
  cartItemId: string;
  origin: Origin;
  checkoutId: string;
  checkoutItemId: string;
  salesChannelId: SalesChannelID;
  barcode: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
  country: Country;
  customerId: string;
  email: string;
  firstname: string;
  lastname: string;
}

export enum Name {
  BlindTicket = "Blind Ticket",
  Regular = "Regular",
}

export enum Country {
  De = "DE",
}

export enum Currency {
  Eur = "EUR",
}

export enum DeliveryType {
  Virtual = "VIRTUAL",
}

export interface History {
  type: HistoryType;
  date: Date;
  _id: string;
}

export enum HistoryType {
  TicketCreated = "ticket.created",
  TicketValidated = "ticket.validated",
}

export enum Origin {
  Yourticket = "yourticket",
}

export enum SalesChannelID {
  SchWeb = "sch-web",
}

export enum TicketStatus {
  Valid = "VALID",
  Invalid = "INVALID"
}
export enum RowType {
  Single = "SINGLE",
}

export interface VivenuEventsResponse {
  rows: Row[];
  total: number;
}

export interface Row {
  _id: string;
  sellerId: string;
  name: string;
  description: string;
  locationName: string;
  locationStreet: string;
  locationCity: string;
  locationPostal: string;
  locationCountry: string;
  start: Date;
  end: Date;
  timezone: string;
  sellStart: Date;
  sellEnd: Date;
  pricingSettings: PricingSettings;
  rebookingSettings: object;
  maxAmount: number;
  maxAmountPerOrder: number;
  minAmountPerOrder: number;
  customerTags: unknown[];
  customSettings: CustomSettings;
  accentColor: string;
  pageStyle: string;
  showOtherEvents: boolean;
  eventType: string;
  childEvents: unknown[];
  url: string;
  tags: unknown[];
  ticketDesign: TicketDesign;
  dataRequestSettings: DataRequestSettings;
  styleOptions: RowStyleOptions;
  geoCode: GeoCode;
  reservationSettings: ReservationSettings;
  ticketSettings: TicketSettings;
  subscriptionSettings: object;
  deliverySettings: DeliverySettings;
  useTimeSlots: boolean;
  groups: unknown[];
  discountGroups: unknown[];
  cartAutomationRules: unknown[];
  posDiscounts: unknown[];
  categories: Category[];
  tickets: RowTicket[];
  extraFields: ExtraField[];
  ticketExtraFields: ExtraField[];
  underShops: UnderShop[];
  gallery: unknown[];
  recurrenceSettings: unknown[];
  daySchemes: unknown[];
  accessListMapping: unknown[];
  salesChannelGroupSettings: SalesChannelGroupSetting[];
  timeSlots: unknown[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  accountSettings: RowAccountSettings;
  checkinInformation: CheckinInformation;
  customCharges: CustomCharges;
  customTextConfig: Custom;
  extraInformation: ExtraInformation;
  hardTicketSettings: HardTicketSettings;
  seating: Seating;
  seoSettings: SEOSettings;
  soldOutFallback: SoldOutFallback;
  tracking: RowTracking;
  upsellSettings: UpsellSettings;
  video: object;
  documentTemplateSettings: DocumentTemplateSettings;
  image: string;
  showCountdown: boolean;
  ticketShopHeader: string;
}

export interface RowAccountSettings {
  enforceAccounts: boolean;
  enforceAuthentication: string;
  _id: string;
}

export interface Category {
  name: string;
  description: string;
  ref: string;
  amount: number;
  active: boolean;
  maxAmountPerOrder?: number;
  _id: string;
}

export interface CheckinInformation {
  checkinStarts: Date;
  _id: string;
}

export interface CustomCharges {
  outerChargeVar: number;
  outerChargeFix: number;
  cartOuterChargeFix: number;
  _id: string;
}

export interface CustomSettings {
  showStartDate: boolean;
  showStartTime: boolean;
  showEndDate: boolean;
  showEndTime: boolean;
  _id: string;
}

export interface Custom {
  _id: string;
}

export interface DataRequestSettings {
  requiresPersonalization: boolean;
  requiresExtraFields: boolean;
  repersonalization: boolean;
  repersonalizationAllowed: boolean;
  repersonalizationDeadline: RepersonalizationDeadline;
  repersonalizationFee: number;
  posPersonalization: string;
  skipAddressInfo: boolean;
  enforceCompany: boolean;
  _id: string;
}

export interface RepersonalizationDeadline {
  unit: string;
  offset: number;
}

export interface DeliverySettings {
  wallet: Wallet;
  pdf: PDF;
}

export interface PDF {
  enabled: null | string;
}

export interface Wallet {
  enabled: null;
  nfc: null;
  seasonCardShowNextEvent: boolean;
}

export interface DocumentTemplateSettings {
  templates: unknown[];
}

export interface ExtraField {
  name: string;
  options: unknown[];
  slug: string;
  description: string;
  required: boolean;
  deleted: boolean;
  onlyForCertainTicketTypes: boolean;
  allowedTicketTypes: unknown[];
  printable: boolean;
  applyToCustomer: boolean;
  conditions: unknown[];
  _id: string;
}

export interface ExtraInformation {
  type: string;
  category: string;
  _id: string;
}

export interface GeoCode {
  lat: number;
  lng: number;
  _id: string;
}

export interface HardTicketSettings {
  enabled: boolean;
  hardTicketInnerCharge: null;
}

export interface PricingSettings {
  dynamicPricing: object;
}

export interface ReservationSettings {
  option: string;
  _id: string;
}

export interface SalesChannelGroupSetting {
  salesChannelGroupId: string;
}


export interface BestAvailableSeatingConfiguration {
  enabled: boolean;
  enforced: boolean;
}

export interface OrphanConfiguration {
  minSeatDistance: number;
  edgeSeatsOrphaning: boolean;
  _id: string;
}
export interface SoldOutFallback {
  soldOutFallbackType: string;
}

export interface RowStyleOptions {
  headerStyle: string;
  hideLocationMap: boolean;
  categoryAlignment: number;
  showAvailabilityIndicator: boolean;
  availabilityIndicatorThresholds: number[];
  hideStartingPrice: boolean;
  hideLocationAddress: boolean;
}

export interface TicketDesign {
  customDesignURL: string;
  infoColor: string;
  hideDates: boolean;
  hideTimes: boolean;
  newLayout: boolean;
  _id: string;
}

export interface TicketSettings {
  cancellationStrategy: string;
  transferSettings: TicketSettingsTransferSettings;
  resellSettings: PDF;
  childEventMapping: unknown[];
}

export interface TicketSettingsTransferSettings {
  expiresAfter: RepersonalizationDeadline;
  allowedUntil: RepersonalizationDeadline;
}

export interface RowTicket {
  name: string;
  description: string;
  price: number;
  amount: number;
  active: boolean;
  posActive: boolean;
  categoryRef: string;
  ignoredForStartingPrice: boolean;
  conditionalAvailability: boolean;
  conditionalAvailabilityMode: string;
  rules: unknown[];
  requiresPersonalizationMode?: null;
  requiresExtraFieldsMode?: null;
  sortingKey: number;
  minAmountPerOrder: number;
  minAmountPerOrderRule: number;
  styleOptions: TicketStyleOptions;
  entryPermissions: unknown[];
  tracking: TicketTracking;
  ignoreForMaxAmounts: boolean;
  expirationSettings: ExpirationSettings;
  salesStart?: null;
  transferSettings: TicketTransferSettings;
  addOns: unknown[];
  _id: string;
  maxAmountPerOrder?: number;
}

export interface ExpirationSettings {
  enabled: boolean;
  expiresAfter: RepersonalizationDeadline;
}

export interface TicketStyleOptions {
  showAvailable?: boolean;
}

export interface TicketTracking {
  tagging: Tagging;
}

export interface Tagging {
  enabled: boolean;
  tags: string[];
}

export interface TicketTransferSettings {
  expiresAfter: RepersonalizationDeadline;
}

export interface RowTracking {
  facebookPixel: Facebook;
  facebookConversion: Facebook;
  gTagManager: GTagManager;
  tagging: Tagging;
}

export interface Facebook {
  active: boolean;
}

export interface GTagManager {
  active: boolean;
  trackers: unknown[];
}

export interface UnderShop {
  name: string;
  active: boolean;
  tickets: UnderShopTicket[];
  pricingSettings: PricingSettings;
  sellStart: Date;
  sellEnd: Date;
  maxAmount: number;
  maxAmountPerOrder: number;
  minAmountPerOrder: number;
  ticketShopHeaderText: string;
  customCharges: Custom;
  seatingContingents: unknown[];
  availabilityMode: string;
  bestAvailableSeatingConfiguration: BestAvailableSeatingConfiguration;
  accountSettings: UnderShopAccountSettings;
  reservationSettings: ReservationSettings;
  customerTags: string[];
  inventoryStrategy: string;
  extraFields: string[];
  salesChannelGroupSettings: SalesChannelGroupSetting[];
  unlockMode: string;
  _id: string;
}

export interface UnderShopAccountSettings {
  enforceAccounts: boolean;
  _id: string;
}

export interface UnderShopTicket {
  baseTicket: string;
  price: number;
  amount: number;
  active: boolean;
  _id: string;
}

export interface UpsellSettings {
  active: boolean;
  crossSells: CrossSells;
  _id: string;
}

export interface CrossSells {
  eventIds: string[];
}

export interface VivenuCreateCustomerResponse {
  _id: string;
  company: string;
  name: string;
  prename: string;
  lastname: string;
  image: string;
  primaryEmail: string;
  number: number;
  phone: string;
  location: Location;
  transactions: string[];
  sellerId: string;
  notes: string;
  extraFields: object;
  tags: string[];
  blocked: boolean;
  verified: boolean;
  _account: Account;
  meta: object;
  createdAt: Date;
  updatedAt: Date;
}

export interface Account {
  verificationToken: string;
  passwordResetToken: string;
  limitations: Limitations;
  loginType: string;
}

export interface Limitations {
  nextVerificationMailRequest: Date;
}

export interface Location {
  street: string;
  line2: string;
  postal: string;
  city: string;
  locale: string;
  state: string;
  center: number[];
  country: string;
}

export interface VivenuEventInfoResponse {
  _id: string;
  name: string;
  start: Date;
  end: Date;
  url: string;
  slogan: string;
  description: string;
  locationName: string;
  posDiscounts: DiscountGroup[];
  categories: VivenuEventInfoResponseCategory[];
  groups: Group[];
  cartAutomationRules: CartAutomationRule[];
  discountGroups: DiscountGroup[];
  seating: Seating;
  extraFields: ExtraField[];
  ticketExtraFields: ExtraField[];
  image: string;
  styleOptions: StyleOptions;
  video: Video;
  gallery: Gallery[];
  checkinInformation: CheckinInformation;
  accentColor: string;
  sellerId: string;
  sellStart: Date;
  ticketShopHeader: string;
  hardTicketSettings: HardTicketSettings;
  tracking: Tracking;
  accountSettings: AccountSettings;
  dataRequestSettings: DataRequestSettings;
  seoSettings: SEOSettings;
  soldOutFallback: SoldOutFallback;
  reservationSettings: ReservationSettings;
  customTextConfig: CustomTextConfig;
  customSettings: CustomSettings;
  upsellSettings: UpsellSettings;
  useTimeSlots: boolean;
  saleStatus: string;
  underShopId: string;
  unlockMode: string;
  channelId: string;
  seatingEventId: string;
  seatingChildEventIds: string[];
  seatingConfigurations: CustomSettings;
  contingents: string[];
  theme: string;
  taxRate: number;
  max: number;
  min: number;
  v: number;
  cXv: number;
  cXf: number;
  ccXf: number;
  startingPrice: string;
  showTimeRangeInTicket: boolean;
  showTimeRangeInListing: boolean;
  showCountdown: boolean;
  showOtherEvents: boolean;
  accountsModule: boolean;
  stripe_api_key: string;
  currency: string;
  seller: Seller;
  timezone: string;
  location: Location;
  slots: Slot[];
  timeSlots: TimeSlot[];
  ticketShopHeaderText: string;
  tickets: Ticket[];
}

export interface AccountSettings {
  _id: string;
  enforceAccounts: boolean;
  enforceAuthentication: string;
}

export interface CartAutomationRule {
  _id: string;
  name: string;
  triggerType: string;
  triggerTargetGroup: string;
  thenType: string;
  thenTargets: ThenTarget[];
}

export interface ThenTarget {
  _id: string;
  thenTargetGroup: string;
  thenTargetMin: number;
  thenTargetMax: number;
}

export interface VivenuEventInfoResponseCategory {
  _id: string;
  name: string;
  description: string;
  seatingReference: string;
  ref: string;
  amount: number;
  active: boolean;
  recommendedTicket: string;
  maxAmountPerOrder: number;
  listWithoutSeats: boolean;
}

export interface CheckinInformation {
  _id: string;
  checkinStarts: Date;
}

export interface CustomTextConfig {
  _id: string;
  buyTicketsCTA: string;
}

export interface DataRequestSettings {
  requiresPersonalization: boolean;
  requiresExtraFields: boolean;
  repersonalization: boolean;
  posPersonalization: string;
}

export interface DiscountGroup {
  _id: string;
  name: string;
  rules?: DiscountGroupRule[];
  discountType: string;
  value: number;
}

export interface DiscountGroupRule {
  _id: string;
  group: string;
  type: string;
  min: number;
  max: number;
}

export interface Condition {
  _id: string;
  baseSlug: string;
  value: unknown[];
  operator: string;
}

export interface Gallery {
  _id: string;
  title: string;
  description: string;
  copyright: string;
  index: number;
  image: string;
}

export interface Group {
  _id: string;
  name: string;
  tickets: string[];
}

export interface Location {
  locationName: string;
  locationStreet: string;
  locationCity: string;
  locationPostal: string;
  locationCountry: string;
  geoCode: GeoCode;
}

export interface GeoCode {
  _id: string;
  lat: number;
  lng: number;
}

export interface ReservationSettings {
  option: string;
}

export interface Seating {
  _id: string;
  active: boolean;
  eventKey: string;
  eventId: string;
  seatMapId: string;
  revisionId: string;
  orphanConfiguration: OrphanConfiguration;
  contingents: string[];
  availabilityMode: string;
  bestAvailableSeatingConfiguration: BestAvailableSeatingConfiguration;
}

export interface BestAvailableSeatingConfiguration {
  enabled: boolean;
  enforced: boolean;
}

export interface OrphanConfiguration {
  _id: string;
  minSeatDistance: number;
  edgeSeatsOrphaning: boolean;
}

export interface Seller {
  name: string;
  description: string;
  image: string;
  documentImage: string;
  url: string;
  supportUrl: string;
  customLogo: string;
  defaultLanguage: string;
}

export interface SEOSettings {
  _id: string;
  tags: string[];
  noIndex: boolean;
  title: string;
  description: string;
}

export interface Slot {
  _id: string;
  start: string;
  amount: number;
  offers: CustomSettings;
}

export interface SoldOutFallback {
  _id: string;
  soldOutFallbackType: string;
  soldOutFallbackLink: string;
}

export interface StyleOptions {
  headerStyle: string;
  hideLocationMap: boolean;
  hideLocationAddress: boolean;
  categoryAlignment: number;
  showAvailabilityIndicator: boolean;
  availabilityIndicatorThresholds: number[];
}

export interface Ticket {
  id: string;
  v: number;
  name: string;
  price: number;
  color: string;
  description: string;
  active: boolean;
  categoryRef: string;
  requiresPersonalization: boolean;
  sortingKey: number;
  enableHardTicketOption: boolean;
  forceHardTicketOption: boolean;
  maxAmountPerOrder: number;
  minAmountPerOrder: number;
  minAmountPerOrderRule: number;
  taxRate: number;
  styleOptions: CustomSettings;
  ignoreForMaxAmounts: boolean;
  conditionalAvailability: boolean;
  conditionalAvailabilityMode: string;
  rules: TicketRule[];
  outerChargeFix: number;
  innnerChargeFix: number;
  dynamicFees: CustomSettings[];
  salesStart: Sales;
  salesEnd: Sales;
  subscriptionSettings: CustomSettings;
  priceTableTypeId: string;
  meta: CustomSettings;
}

export interface TicketRule {
  _id: string;
  ticketGroup: string;
  min: number;
  max: number;
}

export interface Sales {
  target: string;
  unit: string;
  offset: number;
}

export interface TimeSlot {
  _id: string;
  startTime: StartTime;
  v: number;
  startingPrice: number;
  categories: TimeSlotCategory[];
  ticketTypes: TicketType[];
  availabilityIndicator: string;
}

export interface TimeSlotCategory {
  categoryRef: string;
  v: number;
}

export interface StartTime {
  hour: number;
  minute: number;
}

export interface TicketType {
  ticketTypeId: string;
  v: number;
}

export interface Tracking {
  facebookPixel: FacebookPixel;
  tagging: Tagging;
}

export interface FacebookPixel {
  active: boolean;
  pixelId: string;
}

export interface Tagging {
  enabled: boolean;
  tags: string[];
}

export interface UpsellSettings {
  _id: string;
  active: boolean;
  productStream: string;
  headerImage: string;
  crossSells: CrossSells;
}

export interface CrossSells {
  eventIds: string[];
}

export interface Video {
  youtubeID: string;
}
