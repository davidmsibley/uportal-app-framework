/*
 * Licensed to Apereo under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Apereo licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License.  You may obtain a
 * copy of the License at the following location:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
define(['angular'], function(angular) {
  return angular.module('frame-config', [])
    .constant('THEMES',
      {
        /*
         * THOU SHALT INCREMENT THIS VERSION NUMBER
         * IF THOU CHANGEST ANY OF THE THEMES BELOW
         */
        'themeVersion': 10,
        'themes': [
          {
            'name': 'default',
            'portalSkinKey': 'default',
            'group': 'uPortal',
            'crest': 'img/apereo-logo.png',
            'title': 'uPortal',
            'subtitle': null,
            'ariaLabelTitle': 'uPortal',
            'materialTheme': {
              'primary': 'blue',
              'accent': 'grey',
              'warn': 'red',
             },
          },
          {
            'name': 'uw-madison',
            'portalSkinKey': 'uwMadison',
            'crest': 'img/uw-madison-crest.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW Crest',
            'group': 'UW-Madison',
            'mascotImg': 'img/bucky.gif',
            'profileUrl': null,
            'footerLinks': [{'url': '/web/static/myuw-help',
                             'target': '_blank',
                             'title': 'Help',
                           },
                           {'url': 'https://my.wisc.edu/portal/p/feedback',
                             'target': '_blank',
                             'title': 'Feedback',
                           }],
            'materialTheme': {
              'primary': {
                '50': '#fed5d7',
                '100': '#fc8b8f',
                '200': '#fb545a',
                '300': '#f90e17',
                '400': '#e3060e',
                '500': '#c5050c',
                '600': '#a7040a',
                '700': '#890308',
                '800': '#6b0307',
                '900': '#4e0205',
                'A100': '#fed5d7',
                'A200': '#fc8b8f',
                'A400': '#e3060e',
                'A700': '#890308',
                'contrastDefaultColor': 'light',
                'contrastDarkColors':
                  ['50', '100', '200', '300', '400', 'A100', 'A200'],
              },
              'accent': {
                '50': '#b8e9fd',
                '100': '#6dd3fc',
                '200': '#36c2fa',
                '300': '#05a4e4',
                '400': '#058fc6',
                '500': '#0479a8',
                '600': '#03638a',
                '700': '#034e6c',
                '800': '#02384e',
                '900': '#012330',
                'A100': '#b8e9fd',
                'A200': '#0479a8',
                'A400': '#058fc6',
                'A700': '#034e6c',
                'contrastDefaultColor': 'light',
                'contrastDarkColors':
                  ['50', '100', '200', '300', '400', 'A100'],
              },
              'warn': {
                '50': '#ffffff',
                '100': '#f9e7d7',
                '200': '#f2c9a6',
                '300': '#eaa368',
                '400': '#e6934d',
                '500': '#e28332',
                '600': '#d7731e',
                '700': '#bc651b',
                '800': '#a15717',
                '900': '#874813',
                'A100': '#ffffff',
                'A200': '#f9e7d7',
                'A400': '#e6934d',
                'A700': '#bc651b',
                'contrastDefaultColor': 'dark',
                'contrastLightColors':
                  ['500', '600', '700', '800', '900', 'A700'],
              },
            },
          },
          {
            'name': 'uw-river-falls',
            'portalSkinKey': 'uwRiverFalls',
            'crest': 'img/uwrf-logo.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW River Falls Logo',
            'group': 'UW System-River Falls',
            'mascotImg': 'img/uwrf-mascot.gif',
            'footerLinks': [
             {'url': 'https://technology.uwrf.edu/',
               'target': '_blank',
                'title': 'UWRF Help',
             },
             {'url': 'https://my.uwrf.edu/portal/p/uwrf-feedback',
               'target': '_blank',
               'title': 'Feedback',
             }],
            'materialTheme': {
              'primary': {
                '50': '#fcdae1',
                '100': '#f693a8',
                '200': '#f25f7e',
                '300': '#ed1d49',
                '400': '#da113c',
                '500': '#be0f34',
                '600': '#a20d2c',
                '700': '#850b24',
                '800': '#69081d',
                '900': '#4d0615',
                'A100': '#fcdae1',
                'A200': '#f693a8',
                'A400': '#da113c',
                'A700': '#850b24',
                'contrastDefaultColor': 'light',
                'contrastDarkColors': ['50', '100', '200', 'A100', 'A200'],
              },
              'accent': {
                '50': '#ebecec',
                '100': '#c5c5c6',
                '200': '#a8a9aa',
                '300': '#848687',
                '400': '#757677',
                '500': '#666768',
                '600': '#575859',
                '700': '#484849',
                '800': '#39393a',
                '900': '#292a2a',
                'A100': '#ebecec',
                'A200': '#c5c5c6',
                'A400': '#757677',
                'A700': '#484849',
                'contrastDefaultColor': 'light',
                'contrastDarkColors': ['50', '100', 'A100', 'A200'],
              },
              'warn': 'deep-orange',
            },
          },
          {
            'name': 'uw-stevens-point',
            'portalSkinKey': 'uwStevensPoint',
            'crest': 'img/uwsp-logo-52.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW Stevens Point Logo',
            'group': 'UW System-Stevens Point',
            'footerLinks': [
              {
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
              }],
            'materialTheme': {
             'primary': {
               '50': '#efebf7',
               '100': '#c5b4e0',
               '200': '#a78dd0',
               '300': '#805abb',
               '400': '#7048af',
               '500': '#623f99',
               '600': '#543683',
               '700': '#462d6e',
               '800': '#382458',
               '900': '#2a1b42',
               'A100': '#efebf7',
               'A200': '#c5b4e0',
               'A400': '#7048af',
               'A700': '#462d6e',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['50', '100', '200', 'A100', 'A200'],
             },
             'accent': {
               '50': '#946d00',
               '100': '#ad8000',
               '200': '#c79300',
               '300': '#e0a500',
               '400': '#fab800',
               '500': '#ffc114',
               '600': '#ffcf47',
               '700': '#ffd561',
               '800': '#ffdc7a',
               '900': '#ffe394',
               'A100': '#ffcf47',
               'A200': '#ffc82e',
               'A400': '#ffc114',
               'A700': '#ffeaad',
               'contrastDefaultColor': 'dark',
               'contrastLightColors': ['50', '100', '200', '300'],
             },
             'warn': 'red',
            },
          },
          {
            'name': 'uw-milwaukee',
            'portalSkinKey': 'uwMilwaukee',
            'crest': 'img/uwm-logo-52.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW-Milwaukee Logo',
            'group': 'UW System-Milwaukee',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
              }],
            'materialTheme': {
             'primary': {
               '50': '#858585',
               '100': '#5e5e5e',
               '200': '#424242',
               '300': '#1f1f1f',
               '400': '#0f0f0f',
               '500': '#000000',
               '600': '#000000',
               '700': '#000000',
               '800': '#000000',
               '900': '#000000',
               'A100': '#858585',
               'A200': '#5e5e5e',
               'A400': '#0f0f0f',
               'A700': '#000000',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['50', 'A100'],
             },
             'accent': {
               '50': '#664c00',
               '100': '#805e00',
               '200': '#997100',
               '300': '#b38400',
               '400': '#cc9700',
               '500': '#e6aa00',
               '600': '#ffc41a',
               '700': '#ffca33',
               '800': '#ffd14d',
               '900': '#ffd766',
               'A100': '#ffc41a',
               'A200': '#ffbd00',
               'A400': '#e6aa00',
               'A700': '#ffde80',
               'contrastDefaultColor': 'dark',
               'contrastLightColors': ['50', '100', '200', '300', 'A400'],
             },
             'warn': 'deep-orange',
            },
          },
          {
            'name': 'uw-whitewater',
            'portalSkinKey': 'uwWhitewater',
            'crest': 'img/uww-logo-52.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW-Whitewater Logo',
            'group': 'UW System-Whitewater',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
              }],
            'materialTheme': {
             'primary': {
               '50': '#c7b7dc',
               '100': '#9f83c2',
               '200': '#825eb0',
               '300': '#5f4185',
               '400': '#513771',
               '500': '#422d5c',
               '600': '#332347',
               '700': '#251933',
               '800': '#160f1e',
               '900': '#07050a',
               'A100': '#c7b7dc',
               'A200': '#9f83c2',
               'A400': '#513771',
               'A700': '#251933',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['50', '100', 'A100', 'A200'],
             },
             'accent': {
               '50': '#afa756',
               '100': '#b7b068',
               '200': '#bfb979',
               '300': '#c7c28a',
               '400': '#d0cb9b',
               '500': '#d8d4ad',
               '600': '#e8e6cf',
               '700': '#f0efe1',
               '800': '#f9f8f2',
               '900': '#ffffff',
               'A100': '#e8e6cf',
               'A200': '#e0ddbe',
               'A400': '#d8d4ad',
               'A700': '#ffffff',
               'contrastDefaultColor': 'dark',
               'contrastLightColors': ['50', '100', 'A400'],
             },
             'warn': 'amber',
            },
          },
          {
            'name': 'uw-stout',
            'portalSkinKey': 'uwStout',
            'crest': 'img/uws-logo-52.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW Crest',
            'group': 'UW System-Stout',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
              }],
            'materialTheme': {
             'primary': {
               '50': '#9acdff',
               '100': '#4ea8ff',
               '200': '#168cff',
               '300': '#0068cd',
               '400': '#0058af',
               '500': '#004990',
               '600': '#003971',
               '700': '#002a53',
               '800': '#001a34',
               '900': '#000b16',
               'A100': '#9acdff',
               'A200': '#4ea8ff',
               'A400': '#0058af',
               'A700': '#002a53',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['50', '100', 'A100', 'A200'],
             },
             'accent': {
               '50': '#744805',
               '100': '#8c5706',
               '200': '#a56607',
               '300': '#bd7508',
               '400': '#d68409',
               '500': '#ee930b',
               '600': '#f6a935',
               '700': '#f7b44e',
               '800': '#f8be66',
               '900': '#f9c87f',
               'A100': '#f6a935',
               'A200': '#f59f1d',
               'A400': '#ee930b',
               'A700': '#fad397',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['700', '800', '900', 'A700'],
             },
             'warn': 'red',
            },
          },
          {
            'name': 'uw-oshkosh',
            'portalSkinKey': 'uwOshkosh',
            'crest': 'img/uw-oshkosh-2016.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW Crest',
            'group': 'UW System-Oshkosh',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
              }],
            'materialTheme': {
             'primary': {
               '50': '#858585',
               '100': '#5e5e5e',
               '200': '#424242',
               '300': '#1f1f1f',
               '400': '#0f0f0f',
               '500': '#000000',
               '600': '#000000',
               '700': '#000000',
               '800': '#000000',
               '900': '#000000',
               'A100': '#858585',
               'A200': '#5e5e5e',
               'A400': '#0f0f0f',
               'A700': '#000000',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['50', 'A100'],
             },
             'accent': {
               '50': '#896501',
               '100': '#a37701',
               '200': '#bc8a01',
               '300': '#d59d01',
               '400': '#efaf01',
               '500': '#febd0c',
               '600': '#fecb3e',
               '700': '#fed258',
               '800': '#fed971',
               '900': '#fedf8a',
               'A100': '#fecb3e',
               'A200': '#fec425',
               'A400': '#febd0c',
               'A700': '#ffe6a4',
               'contrastDefaultColor': 'dark',
               'contrastLightColors': ['50', '100', '200', '300', 'A400'],
             },
             'warn': {
               '50': '#a3ffff',
               '100': '#57ffff',
               '200': '#1fffff',
               '300': '#00d6d6',
               '400': '#00b8b8',
               '500': '#009999',
               '600': '#007a7a',
               '700': '#005c5c',
               '800': '#003d3d',
               '900': '#001f1f',
               'A100': '#a3ffff',
               'A200': '#57ffff',
               'A400': '#00b8b8',
               'A700': '#005c5c',
               'contrastDefaultColor': 'dark',
               'contrastLightColors':
                ['500', '600', '700', '800', '900', 'A700'],
             },
            },
          },
          {
            'name': 'uw-greenbay',
            'portalSkinKey': 'uwGreenBay',
            'crest': 'img/UWGB-logo-52.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW Crest',
            'group': 'UW System-Green Bay',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
            }],
            'materialTheme': {
             'primary': {
               '50': '#70ffb8',
               '100': '#24ff91',
               '200': '#00eb75',
               '300': '#00a352',
               '400': '#008542',
               '500': '#006633',
               '600': '#004724',
               '700': '#002914',
               '800': '#000a05',
               '900': '#000000',
               'A100': '#70ffb8',
               'A200': '#24ff91',
               'A400': '#008542',
               'A700': '#002914',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['50', '100', '200', 'A100', 'A200'],
             },
             'accent': {
               '50': '#000000',
               '100': '#001919',
               '200': '#003333',
               '300': '#004c4d',
               '400': '#006666',
               '500': '#007f80',
               '600': '#00b2b3',
               '700': '#00cccc',
               '800': '#00e5e5',
               '900': '#00ffff',
               'A100': '#00b2b3',
               'A200': '#009999',
               'A400': '#007f80',
               'A700': '#1affff',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['800', '900', 'A700'],
             },
             'warn': {
               '50': '#ffffff',
               '100': '#f2cbcb',
               '200': '#e79d9d',
               '300': '#d96464',
               '400': '#d34c4c',
               '500': '#cd3333',
               '600': '#b52c2c',
               '700': '#9c2626',
               '800': '#842020',
               '900': '#6b1a1a',
               'A100': '#ffffff',
               'A200': '#f2cbcb',
               'A400': '#d34c4c',
               'A700': '#9c2626',
               'contrastDefaultColor': 'light',
               'contrastDarkColors':
                ['50', '100', '200', '300', 'A100', 'A200'],
             },
            },
          },
          {
            'name': 'uw-lacrosse',
            'portalSkinKey': 'uwLaCrosse',
            'crest': 'img/uwl-round-56.jpg',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW Crest',
            'group': 'UW System-La Crosse',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
            }],
            'materialTheme': {
             'primary': {
               '50': '#ff7d99',
               '100': '#ff315e',
               '200': '#f80036',
               '300': '#b00026',
               '400': '#920020',
               '500': '#730019',
               '600': '#540012',
               '700': '#36000c',
               '800': '#170005',
               '900': '#000000',
               'A100': '#ff7d99',
               'A200': '#ff315e',
               'A400': '#920020',
               'A700': '#36000c',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['50', 'A100'],
             },
             'accent': {
               '50': '#39575b',
               '100': '#43666a',
               '200': '#4d757a',
               '300': '#578489',
               '400': '#619399',
               '500': '#6f9ea4',
               '600': '#8fb3b8',
               '700': '#9ebec2',
               '800': '#aec8cc',
               '900': '#bdd3d6',
               'A100': '#8fb3b8',
               'A200': '#7fa9ae',
               'A400': '#6f9ea4',
               'A700': '#cddddf',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['700', '800', '900', 'A700'],
             },
             'warn': {
               '50': '#fcf7f2',
               '100': '#ecceb5',
               '200': '#e1b188',
               '300': '#d38b4f',
               '400': '#cd7b37',
               '500': '#b76c2e',
               '600': '#9f5e28',
               '700': '#864f22',
               '800': '#6e411c',
               '900': '#553215',
               'A100': '#fcf7f2',
               'A200': '#ecceb5',
               'A400': '#cd7b37',
               'A700': '#864f22',
               'contrastDefaultColor': 'light',
               'contrastDarkColors':
                ['50', '100', '200', '300', '400', 'A100', 'A200', 'A400'],
             },
            },
          },
          {
            'name': 'uw-parkside',
            'portalSkinKey': 'uwParkside',
            'crest': 'img/uw-parkside-logo-56.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW Parkside',
            'group': 'UW System-Parkside',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
              }],
              'materialTheme': {
               'primary': {
                 '50': '#73ffc6',
                 '100': '#27ffa6',
                 '200': '#00ee8c',
                 '300': '#00a662',
                 '400': '#008850',
                 '500': '#00693e',
                 '600': '#004a2c',
                 '700': '#002c1a',
                 '800': '#000d08',
                 '900': '#000000',
                 'A100': '#73ffc6',
                 'A200': '#27ffa6',
                 'A400': '#008850',
                 'A700': '#002c1a',
                 'contrastDefaultColor': 'light',
                 'contrastDarkColors': ['50', '100', '200', 'A100', 'A200'],
               },
               'accent': {
                 '50': '#2b401e',
                 '100': '#375126',
                 '200': '#43632e',
                 '300': '#4f7437',
                 '400': '#5a853f',
                 '500': '#669747',
                 '600': '#7fb35d',
                 '700': '#8dbb6f',
                 '800': '#9bc380',
                 '900': '#a8cc91',
                 'A100': '#7fb35d',
                 'A200': '#72a84f',
                 'A400': '#669747',
                 'A700': '#b6d4a3',
                 'contrastDefaultColor': 'light',
                 'contrastDarkColors': ['600', '700', '800', '900', 'A700'],
               },
               'warn': {
                 '50': '#ffffff',
                 '100': '#f1d1c0',
                 '200': '#e7ae92',
                 '300': '#da8358',
                 '400': '#d5703f',
                 '500': '#c9602c',
                 '600': '#b05426',
                 '700': '#974821',
                 '800': '#7e3c1c',
                 '900': '#653016',
                 'A100': '#ffffff',
                 'A200': '#f1d1c0',
                 'A400': '#d5703f',
                 'A700': '#974821',
                 'contrastDefaultColor': 'light',
                 'contrastDarkColors':
                  ['50', '100', '200', '300', '400', 'A100', 'A200', 'A400'],
               },
              },
          },
          {
            'name': 'uw-platteville',
            'portalSkinKey': 'uwPlatteville',
            'crest': 'img/uwp-logo-56.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW Platteville',
            'group': 'UW System-Platteville',
            'mascotImg': 'img/uwp-pete.png',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
            }],
            'materialTheme': {
             'primary': {
               '50': '#c6e6fd',
               '100': '#7dc6fa',
               '200': '#47aef8',
               '300': '#098eee',
               '400': '#087dd0',
               '500': '#076bb3',
               '600': '#065996',
               '700': '#054878',
               '800': '#04365b',
               '900': '#02253d',
               'A100': '#c6e6fd',
               'A200': '#7dc6fa',
               'A400': '#087dd0',
               'A700': '#054878',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['50', '100', '200', 'A100', 'A200'],
             },
             'accent': {
               '50': '#753100',
               '100': '#8f3b01',
               '200': '#a84601',
               '300': '#c25101',
               '400': '#db5b01',
               '500': '#f46601',
               '600': '#fe822a',
               '700': '#fe9144',
               '800': '#fea05d',
               '900': '#feaf77',
               'A100': '#fe822a',
               'A200': '#fe7311',
               'A400': '#f46601',
               'A700': '#ffbe90',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['700', '800', '900', 'A700'],
             },
             'warn': {
               '50': '#5ba4dc',
               '100': '#2980c2',
               '200': '#1f6193',
               '300': '#133a59',
               '400': '#0d2a3f',
               '500': '#081926',
               '600': '#03080d',
               '700': '#000000',
               '800': '#000000',
               '900': '#000000',
               'A100': '#5ba4dc',
               'A200': '#2980c2',
               'A400': '#0d2a3f',
               'A700': '#000000',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['50', 'A100'],
             },
            },
          },
          {
            'name': 'uw-superior',
            'portalSkinKey': 'uwSuperior',
            'crest': 'img/uw-superior-logo-112.jpg',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW Superstatic',
            'group': 'UW System-Superior',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
            }],
            'materialTheme': {
             'primary': {
               '50': '#858585',
               '100': '#5e5e5e',
               '200': '#424242',
               '300': '#1f1f1f',
               '400': '#0f0f0f',
               '500': '#000000',
               '600': '#000000',
               '700': '#000000',
               '800': '#000000',
               '900': '#000000',
               'A100': '#858585',
               'A200': '#5e5e5e',
               'A400': '#0f0f0f',
               'A700': '#000000',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['50', 'A100'],
             },
             'accent': {
               '50': '#ac8000',
               '100': '#c59300',
               '200': '#dfa600',
               '300': '#f8b900',
               '400': '#ffc313',
               '500': '#ffca2c',
               '600': '#ffd65f',
               '700': '#ffdd79',
               '800': '#ffe392',
               '900': '#ffeaac',
               'A100': '#ffd65f',
               'A200': '#ffd046',
               'A400': '#ffca2c',
               'A700': '#fff0c5',
               'contrastDefaultColor': 'dark',
               'contrastLightColors': ['50', '100', '200'],
             },
             'warn': 'blue',
            },
          },
          {
            'name': 'uw-eau-claire',
            'portalSkinKey': 'uwEauClaire',
            'crest': 'img/uw-eauclaire-logo-52.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW Eau Claire',
            'group': 'UW System-Eau Claire',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
              }],
            'materialTheme': {
              'primary': {
                '50': '#cbd2ee',
                '100': '#91a1db',
                '200': '#677dce',
                '300': '#3a54b3',
                '400': '#32499c',
                '500': '#2b3e85',
                '600': '#24336e',
                '700': '#1c2857',
                '800': '#151e40',
                '900': '#0d1328',
                'A100': '#cbd2ee',
                'A200': '#91a1db',
                'A400': '#32499c',
                'A700': '#1c2857',
                'contrastDefaultColor': 'light',
                'contrastDarkColors': ['50', '100', 'A100', 'A200'],
              },
              'accent': {
                '50': '#664908',
                '100': '#7e5a0a',
                '200': '#956b0c',
                '300': '#ad7c0e',
                '400': '#c58d0f',
                '500': '#dc9e11',
                '600': '#efb532',
                '700': '#f1bd49',
                '800': '#f3c661',
                '900': '#f4ce79',
                'A100': '#efb532',
                'A200': '#edac1a',
                'A400': '#dc9e11',
                'A700': '#f6d790',
                'contrastDefaultColor': 'light',
                'contrastDarkColors':
                  ['500', '600', '700', '800', '900', 'A100', 'A700'],
              },
              'warn': {
                '50': '#ffffff',
                '100': '#fae6d9',
                '200': '#f3c6a8',
                '300': '#ea9d69',
                '400': '#e78c4e',
                '500': '#e37a33',
                '600': '#d96a1e',
                '700': '#bf5c1a',
                '800': '#a44f16',
                '900': '#894213',
                'A100': '#ffffff',
                'A200': '#fae6d9',
                'A400': '#e78c4e',
                'A700': '#bf5c1a',
                'contrastDefaultColor': 'dark',
                'contrastLightColors':
                  ['500', '600', '700', '800', '900', 'A700'],
              },
            },
          },
          {
            'name': 'uw-extension',
            'portalSkinKey': 'uwExtension',
            'crest': 'img/uwex-logo-white-52.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW Extension',
            'group': 'UW System-Extension',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
              }],
            'materialTheme': {
             'primary': {
               '50': '#b0d2f8',
               '100': '#6aaaf2',
               '200': '#368ded',
               '300': '#1269ca',
               '400': '#105bae',
               '500': '#0d4c92',
               '600': '#0b3d76',
               '700': '#082f5a',
               '800': '#05203e',
               '900': '#031122',
               'A100': '#b0d2f8',
               'A200': '#6aaaf2',
               'A400': '#105bae',
               'A700': '#082f5a',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['50', '100', 'A100', 'A200'],
             },
             'accent': {
               '50': '#b6b068',
               '100': '#bfb979',
               '200': '#c7c28a',
               '300': '#cfcb9b',
               '400': '#d7d4ac',
               '500': '#e0ddbe',
               '600': '#f0efe0',
               '700': '#f9f8f1',
               '800': '#ffffff',
               '900': '#ffffff',
               'A100': '#f0efe0',
               'A200': '#e8e6cf',
               'A400': '#e0ddbe',
               'A700': '#ffffff',
               'contrastDefaultColor': 'dark',
               'contrastLightColors': ['50', '100'],
             },
             'warn': 'red',
            },
          },
          {
            'name': 'uw-colleges',
            'portalSkinKey': 'uwColleges',
            'crest': 'img/uw-colleges-56.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW Colleges',
            'group': 'UW System-Colleges',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
              }],
            'materialTheme': {
             'primary': {
               '50': '#fffafa',
               '100': '#f9b3b7',
               '200': '#f57e87',
               '300': '#f03c48',
               '400': '#ee202e',
               '500': '#de111f',
               '600': '#c20f1b',
               '700': '#a50d17',
               '800': '#890a13',
               '900': '#6c080f',
               'A100': '#fffafa',
               'A200': '#f9b3b7',
               'A400': '#ee202e',
               'A700': '#a50d17',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['50', '100', '200', 'A100', 'A200'],
             },
             'accent': {
               '50': '#7a6a4c',
               '100': '#8a7756',
               '200': '#998560',
               '300': '#a5916e',
               '400': '#ae9d7e',
               '500': '#b8a98d',
               '600': '#ccc1ad',
               '700': '#d6cdbc',
               '800': '#dfd9cc',
               '900': '#e9e4dc',
               'A100': '#ccc1ad',
               'A200': '#c2b59d',
               'A400': '#b8a98d',
               'A700': '#f3f0ec',
               'contrastDefaultColor': 'light',
               'contrastDarkColors': ['700', '800', '900', 'A700'],
             },
             'warn': 'blue',
            },
          },
          {
            'name': 'uw-system',
            'portalSkinKey': 'uwSystemAdministration',
            'crest': 'img/uw-system-logo-112.png',
            'title': 'MyUW',
            'subtitle': null,
            'ariaLabelTitle': 'My U W',
            'crestalt': 'UW System Logo',
            'group': 'default',
            'footerLinks': [{
                'url': 'https://kb.wisconsin.edu/myuwsystem/page.php?id=15303',
                'target': '_blank',
                'title': 'Help',
              }],
            'materialTheme': {
              'primary': {
                '50': '#ffa3c2',
                '100': '#ff578f',
                '200': '#ff1f69',
                '300': '#d60047',
                '400': '#b8003d',
                '500': '#990033',
                '600': '#7a0029',
                '700': '#5c001f',
                '800': '#3d0014',
                '900': '#1f000a',
                'A100': '#ffa3c2',
                'A200': '#ff578f',
                'A400': '#b8003d',
                'A700': '#5c001f',
                'contrastDefaultColor': 'light',
                'contrastDarkColors': ['50', '100', 'A100', 'A200'],
              },
              'accent': {
                '50': '#a2bae6',
                '100': '#668ed6',
                '200': '#3a6dca',
                '300': '#284f94',
                '400': '#22427c',
                '500': '#1b3564',
                '600': '#14284c',
                '700': '#0e1b34',
                '800': '#070f1c',
                '900': '#010204',
                'A100': '#a2bae6',
                'A200': '#668ed6',
                'A400': '#22427c',
                'A700': '#0e1b34',
                'contrastDefaultColor': 'light',
                'contrastDarkColors': ['50', 'A100'],
              },
              'warn': {
                '50': '#ffffff',
                '100': '#f5e0c9',
                '200': '#edc59a',
                '300': '#e1a25e',
                '400': '#dd9344',
                '500': '#d8842a',
                '600': '#c07423',
                '700': '#a6651e',
                '800': '#8c551a',
                '900': '#734515',
                'A100': '#ffffff',
                'A200': '#f5e0c9',
                'A400': '#dd9344',
                'A700': '#a6651e',
                'contrastDefaultColor': 'dark',
                'contrastLightColors':
                  ['500', '600', '700', '800', '900', 'A700'],
              },
            },
          },
        ]})
        .constant('FRAME_URLS', {
            'aboutFrame': 'staticFeeds/about-frame.json',
        })
        .constant('KV_KEYS', {
          'VIEWED_MESSAGE_IDS': 'viewedmessageids',
        })
        .constant('FRAME_BETA_FEATURES', [
          {
            'id': 'showSettings',
            'title': 'Beta Settings',
            'description': 'Shows/Hides the Beta Settings',
          },
          {
            'id': 'disableGroupFilteringForMessages',
            'title': 'Disable Group Filter',
            'description': 'This flag disables group filtering or in-app ' +
              'messages if you have it enabled. (page refresh required)',
          },
        ]);
});
