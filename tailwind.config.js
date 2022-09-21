module.exports = {
  important: true,
  theme: {
      fontFamily: {
          body: ['Inter', 'sans-serif'],
          'acumin-pro': ['acumin-pro', 'sans-serif'],
          'acumin-pro-condensed': ['acumin-pro-condensed', 'sans-serif']
      },
      boxShadow: {
          default: '0 1px 3px 0 var(--shadow)',
          search: '0px 2px 5px var(--bg-white)',
          trans: '0 0 0 1px transparent',
      },
      extend: {
          colors: {
              'nimbus-primary': {
                  '100': 'var(--teal-1)',
                  '200': 'var(--teal-2)',
                  '300': 'var(--teal-3)',
                  'default': 'var(--teal-4)',
                  '500': 'var(--teal-5)',
                  '600': 'var(--teal-6)',
                  '700': 'var(--teal-7)',
                  '800': 'var(--teal-8)',
              },

              'nimbus-secondary': {
                  '00': 'var(--secondary-00)',
                  '100': 'var(--secondary-100)',
                  '125': 'var(--secondary-125)',
                  '150': 'var(--secondary-150)',
                  '175': 'var(--secondary-175)',
                  '200': 'var(--secondary-200)',
                  '250': 'var(--secondary-250)',
                  '300': 'var(--secondary-300)',
                  '350': 'var(--secondary-350)',
                  '400': 'var(--secondary-400)',
                  '450': 'var(--secondary-450)',
                  '500': 'var(--secondary-500)',
                  '550': 'var(--secondary-550)',
                  '600': 'var(--secondary-600)',
                  '650': 'var(--secondary-650)',
                  '700': 'var(--secondary-700)',
                  '750': 'var(--secondary-750)',
                  '800': 'var(--secondary-800)',
                  '850': 'var(--secondary-850)',
                  '900': 'var(--secondary-900)',
                  '925': 'var(--secondary-925)',
                  '950': 'var(--secondary-950)',
                  '975': 'var(--secondary-975)',
                  '1000': 'var(--secondary-1000)'
              },

              'nimbus': {
                  'side-nav': 'var(--side-nav)',
                  'side-nav-icon': 'var(--teal-4)',
                  'side-nav-text': 'var(--white)',

                  'platform-background': 'var(--platform-background)',

                  'submenu': 'var(--submenu)',
                  'submenu-hover': 'var(--submenu-hover)',

                  'main-header': 'var(--main-header)',
                  'main-header-hover': 'var(--teal-4)',

                  'link': 'var(--link)',

                  'icon': 'var(--secondary-400)',
                  'icon-hover': 'var(--teal-5)',

                  'panel-color': 'var(--secondary-100)',
                  'text-color': 'var(--secondary-900)',

                  'border-color': 'var(--secondary-250)',

                  'table-header': 'var(--secondary-200)',

                  'progress-bar': 'var(--secondary-150)'
              },
              'nimbus-labels': {
                  'warning': 'var(--label-warning)',
                  'attention': 'var(--label-attention)',
                  'yellow': 'var(--label-yellow)',
                  'ok': 'var(--label-ok)',
                  'green': 'var(--label-green)',
                  'mint': 'var(--label-mint)',
                  'aqua': 'var(--label-aqua)',
                  'heather': 'var(--label-heather)',
                  'lilac': 'var(--label-lilac)',
                  'purple': 'var(--label-purple)',
                  'pink': 'var(--label-pink)',
                  'coral': 'var(--label-coral)',
                  'cherry': 'var(--label-cherry)',
              },
              'nimbus-button': {
                  'purchase': 'var(--orange-accent)',
                  'purchase-hover': 'var(--yellow-accent)',
                  'primary': 'var(--teal-4)',
                  'primary-hover': 'var(--teal-2)',
                  'secondary': 'var(--teal-1)',
                  'secondary-hover': 'var(--teal-2)',
              },

              'nimbus-white': 'var(--white)',
              'nimbus-black': 'var(--black)',

              'storm-secondary': {
                  '100': 'var(--secondary-100)',
                  '200': 'var(--secondary-200)',
                  '300': 'var(--secondary-300)',
                  '400': 'var(--secondary-400)',
                  'default': 'var(--secondary-500)',
                  '550': 'var(--secondary-550)',
                  '600': 'var(--secondary-600)',
                  '700': 'var(--secondary-700)',
                  '750': 'var(--secondary-750)',
                  '800': 'var(--secondary-800)',
                  '850': 'var(--secondary-850)',
                  '875': 'var(--secondary-875)',
                  '900': 'var(--secondary-900)',
                  '950': 'var(--secondary-950)',
              },
              // 'storm-accent': {
              //     '300': 'var(--accent-300)',
              //     'default': 'var(--accent-500)'
              // },

              'storm-white': 'var(--white)',

              'storm-red': {
                  '300': 'var(--red-300)',
                  '400': 'var(--red-400)',
                  'default': 'var(--red-500)',
                  '600': 'var(--red-600)',
                  '700': 'var(--red-700)',
              },
          },
          backgroundColor: {
              'storm-breadcrumb': {
                  'default': 'var(--breadcrumb-500)',
                  '600': 'var(--breadcrumb-600)'
              },
          },
          gradientColorStops: {
              'primary': 'var(--gradient-start)',
              'secondary': 'var(--gradient-mid)',
              'tertiary': 'var(--gradient-end)'

          },
          borderWidth: {
              '2': '2px',
              '3': '3px',
              '4': '4px',
              '6': '6px',
          },
          boxShadow: {
              'nimbus': '-2px 2px 6px 0 var(--shadow)',
              'none': 'none'
          },
          margin: {
              '50pc': '50%',
              'checkbox': '12rem'
          },
          padding: {
              '2-5': '0.625rem'
          },
          borderRadius: {
              'xl': '0.75rem'
          },
          maxHeight: {
              '40': '10rem',
          },
          height: {
              '7': '1.75rem'
          },
          inset: {
              '-10': '-2.5rem',
              '8': '2rem',
          },
          screens: {
              'sm-laptop': {'min': '1151px', 'max': '1279px'}
          },
          letterSpacing: {
              'snug': '-0.025rem'
          }
      }
  },
  variants: {
      backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
      borderWidth: ['responsive', 'last', 'hover', 'focus'],
      textColor: ['hover', 'active']
  },
  plugins: [],
}