src/
├── assets/                 # Statik dosyalar
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── animations/
├── components/             # Yeniden kullanılabilir UI componentleri
│   ├── common/            # Genel componentler
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Loading/
│   │   └── Modal/
│   ├── forms/             # Form componentleri
│   └── layout/            # Layout componentleri
├── screens/               # Ekran componentleri
│   ├── Auth/
│   │   ├── LoginScreen.tsx
│   │   └── RegisterScreen.tsx
│   ├── Home/
│   ├── Profile/
│   └── index.ts          # Barrel export
├── navigation/            # Navigation yapısı
│   ├── types.ts          # Navigation tipleri
│   ├── RootNavigator.tsx
│   ├── BottomTabNavigator.tsx
│   └── CustomTabBar.tsx
├── services/              # API ve dış servisler
│   ├── api/
│   │   ├── client.ts     # Axios client
│   │   ├── endpoints.ts  # API endpoints
│   │   └── modules/
│   │       ├── auth.ts
│   │       ├── user.ts
│   │       └── products.ts
│   ├── storage/          # AsyncStorage wrapper
│   ├── notifications/    # Push notifications
│   └── analytics/        # Analytics service
├── store/                # Redux store
│   ├── index.ts
│   ├── rootReducer.ts
│   └── slices/
│       ├── authSlice.ts
│       ├── userSlice.ts
│       └── appSlice.ts
├── hooks/                # Custom hooks
│   ├── useAuth.ts
│   ├── useApi.ts
│   └── useStorage.ts
├── utils/                # Utility fonksiyonları
│   ├── helpers.ts
│   ├── validators.ts
│   ├── formatters.ts
│   └── constants.ts
├── types/                # TypeScript type definitions
│   ├── api.ts
│   ├── user.ts
│   └── common.ts
├── styles/               # Stil dosyaları
│   ├── theme.ts          # Tema tanımlamaları
│   ├── colors.ts         # Renkler
│   ├── typography.ts     # Font stilleri
│   └── spacing.ts        # Boşluk değerleri
├── config/               # Konfigürasyon dosyaları
│   ├── env.ts           # Environment variables
│   └── constants.ts     # Uygulama sabitleri
└── __tests__/           # Test dosyaları
    ├── components/
    ├── screens/
    └── utils/ 