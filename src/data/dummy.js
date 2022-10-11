import React from 'react';
import { FiShoppingBag, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import company from './company.png';
const axios = require("axios");

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const companyInfo = [
  {
    name: 'Company Name',
    logo: company,
  }
]

export const stockportfolio = [
  {
    date: '2022-04-18',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.16029284 0.         0.00712966 0.00913066 0.         0.\n' +
      ' 0.06068879 0.09459493 0.14619262 0.         0.         0.\n' +
      ' 0.         0.         0.03630116 0.18904059 0.         0.16319572\n' +
      ' 0.13343303 0.        ]',
    maxSharpe: 2.809000756
  },
  {
    date: '2022-04-19',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.04991693 0.         0.         0.13326675 0.         0.\n' +
      ' 0.11360843 0.         0.18760492 0.         0.13636224 0.\n' +
      ' 0.         0.         0.         0.15762024 0.         0.14052872\n' +
      ' 0.03117485 0.04991693]',
    maxSharpe: 2.221941472
  },
  {
    date: '2022-04-20',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.14981883 0.         0.04409873\n' +
      ' 0.         0.08272543 0.10543023 0.02923989 0.08852245 0.\n' +
      ' 0.04598213 0.         0.         0.15170233 0.         0.15077766\n' +
      ' 0.15170233 0.        ]',
    maxSharpe: 2.012269174
  },
  {
    date: '2022-04-21',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.08269245 0.         0.         0.         0.         0.04037792\n' +
      ' 0.13061269 0.         0.13889896 0.         0.         0.\n' +
      ' 0.         0.         0.         0.24761041 0.         0.12901677\n' +
      ' 0.11802764 0.11276316]',
    maxSharpe: 3.068212443
  },
  {
    date: '2022-04-22',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.10893271 0.         0.         0.         0.07835845 0.10342831\n' +
      ' 0.08523687 0.         0.041886   0.         0.         0.\n' +
      ' 0.15400736 0.         0.         0.20138355 0.         0.0154505\n' +
      ' 0.11317294 0.09814332]',
    maxSharpe: 2.315360788
  },
  {
    date: '2022-04-25',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.         0.03184268 0.05189531\n' +
      ' 0.19826365 0.         0.20121526 0.         0.         0.\n' +
      ' 0.07892538 0.06623782 0.09313343 0.0758341  0.         0.1011492\n' +
      ' 0.10150318 0.        ]',
    maxSharpe: 2.364612315
  },
  {
    date: '2022-04-26',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.0461737  0.17241023 0.         0.         0.         0.\n' +
      ' 0.11749481 0.05797526 0.13143271 0.         0.         0.\n' +
      ' 0.         0.         0.         0.02727311 0.         0.16880271\n' +
      ' 0.15952138 0.1189161 ]',
    maxSharpe: 2.267147371
  },
  {
    date: '2022-04-27',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.04823011 0.08294511 0.         0.09579496 0.         0.\n' +
      ' 0.         0.         0.15373246 0.         0.13863119 0.\n' +
      ' 0.04337837 0.         0.         0.15186604 0.08779781 0.08558204\n' +
      ' 0.         0.11204192]',
    maxSharpe: 1.962045951
  },
  {
    date: '2022-04-28',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.02931792 0.         0.         0.         0.         0.\n' +
      ' 0.20804249 0.         0.11855206 0.         0.03156057 0.\n' +
      ' 0.04879736 0.         0.         0.13593939 0.         0.11545504\n' +
      ' 0.15187812 0.16045705]',
    maxSharpe: 2.842218915
  },
  {
    date: '2022-04-29',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.04223083 0.         0.04224531 0.         0.12922507\n' +
      ' 0.         0.         0.19628248 0.         0.         0.\n' +
      ' 0.         0.07777959 0.         0.15322687 0.05491897 0.09692561\n' +
      ' 0.093413   0.11375226]',
    maxSharpe: 2.613754569
  },
  {
    date: '2022-05-02',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.         0.         0.07613376\n' +
      ' 0.01490501 0.097866   0.18876707 0.         0.10106767 0.\n' +
      ' 0.         0.03144193 0.05712899 0.0267303  0.         0.21054901\n' +
      ' 0.19541025 0.        ]',
    maxSharpe: 2.088664899
  },
  {
    date: '2022-05-03',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.11682403 0.04231735 0.         0.         0.         0.\n' +
      ' 0.11136419 0.11606078 0.         0.         0.         0.\n' +
      ' 0.         0.         0.02986386 0.16562907 0.00133032 0.11606078\n' +
      ' 0.16171885 0.13883078]',
    maxSharpe: 2.418307083
  },
  {
    date: '2022-05-04',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.         0.03777837 0.\n' +
      ' 0.13543751 0.06297357 0.24246259 0.         0.01104978 0.\n' +
      ' 0.         0.         0.06927944 0.22139625 0.         0.17818749\n' +
      ' 0.041435   0.        ]',
    maxSharpe: 2.814103332
  },
  {
    date: '2022-05-05',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.09261828 0.08624976 0.         0.01176346 0.         0.\n' +
      ' 0.06213442 0.         0.20355872 0.         0.13565945 0.\n' +
      ' 0.09687604 0.02039014 0.         0.10703655 0.         0.\n' +
      ' 0.18371317 0.        ]',
    maxSharpe: 2.134747351
  },
  {
    date: '2022-05-06',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.07274968 0.         0.         0.         0.         0.12198626\n' +
      ' 0.15636151 0.         0.11038727 0.         0.         0.\n' +
      ' 0.07284063 0.         0.         0.16557556 0.06722698 0.09861337\n' +
      ' 0.06966602 0.06459271]',
    maxSharpe: 2.791977991
  },
  {
    date: '2022-05-09',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.00000000e+00 0.00000000e+00 0.00000000e+00 1.37161547e-01\n' +
      ' 9.52852020e-02 1.06175296e-04 9.44858151e-02 1.81858728e-03\n' +
      ' 2.80712335e-01 0.00000000e+00 0.00000000e+00 0.00000000e+00\n' +
      ' 1.90473201e-03 0.00000000e+00 0.00000000e+00 2.35931441e-01\n' +
      ' 0.00000000e+00 1.50689433e-01 1.90473201e-03 0.00000000e+00]',
    maxSharpe: 2.440026984
  },
  {
    date: '2022-05-10',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.06342101 0.03214103 0.         0.         0.\n' +
      ' 0.         0.05984642 0.077535   0.         0.01996939 0.\n' +
      ' 0.         0.         0.         0.16802361 0.13155865 0.19691269\n' +
      ' 0.19800329 0.05258891]',
    maxSharpe: 2.260690582
  },
  {
    date: '2022-05-11',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.0490011  0.16364541 0.         0.         0.1450285  0.\n' +
      ' 0.04918455 0.         0.13279337 0.         0.03885734 0.\n' +
      ' 0.08788086 0.         0.         0.11924377 0.         0.11095197\n' +
      ' 0.10341313 0.        ]',
    maxSharpe: 2.159411313
  },
  {
    date: '2022-05-12',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.0296445  0.03302129 0.         0.         0.         0.16217742\n' +
      ' 0.05997568 0.         0.18146156 0.         0.         0.\n' +
      ' 0.0439859  0.         0.         0.26134529 0.         0.16884743\n' +
      ' 0.05954094 0.        ]',
    maxSharpe: 2.907175055
  },
  {
    date: '2022-05-13',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.13928738 0.07198003 0.         0.01599327 0.02002733 0.\n' +
      ' 0.2219161  0.11322267 0.         0.         0.         0.\n' +
      ' 0.         0.         0.         0.15691807 0.         0.06782904\n' +
      ' 0.11612169 0.07670441]',
    maxSharpe: 2.262552057
  },
  {
    date: '2022-05-16',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.09620171 0.         0.         0.         0.\n' +
      ' 0.19765018 0.22202499 0.21185043 0.         0.00242594 0.\n' +
      ' 0.         0.03241442 0.00903468 0.14617152 0.         0.08222613\n' +
      ' 0.         0.        ]',
    maxSharpe: 2.484568134
  },
  {
    date: '2022-05-17',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.09420706 0.03873096 0.14505651 0.05281296 0.         0.\n' +
      ' 0.05499127 0.         0.1722065  0.         0.         0.\n' +
      ' 0.04136693 0.         0.         0.1722065  0.         0.1722065\n' +
      ' 0.         0.05621482]',
    maxSharpe: 2.07077436
  },
  {
    date: '2022-05-18',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.         0.0758552  0.\n' +
      ' 0.         0.         0.15339107 0.         0.11820397 0.\n' +
      ' 0.11149166 0.         0.         0.25310377 0.         0.02446662\n' +
      ' 0.12731926 0.13616843]',
    maxSharpe: 2.358903996
  },
  {
    date: '2022-05-19',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.00230244 0.12094453 0.         0.         0.         0.\n' +
      ' 0.23381427 0.05988128 0.05602046 0.         0.         0.\n' +
      ' 0.         0.         0.01250701 0.15969165 0.         0.17936725\n' +
      ' 0.17547113 0.        ]',
    maxSharpe: 2.482108961
  },
  {
    date: '2022-05-20',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.07956516 0.04842507 0.         0.04720193 0.         0.\n' +
      ' 0.26135366 0.         0.00721313 0.         0.         0.\n' +
      ' 0.05903399 0.         0.         0.23617299 0.         0.08157903\n' +
      ' 0.13112913 0.0483259 ]',
    maxSharpe: 2.516090944
  },
  {
    date: '2022-05-23',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.12834891 0.         0.         0.02509204 0.         0.\n' +
      ' 0.19441487 0.03330713 0.22726007 0.         0.         0.\n' +
      ' 0.         0.02248153 0.01293468 0.         0.11049241 0.15382871\n' +
      ' 0.09183967 0.        ]',
    maxSharpe: 2.170031965
  },
  {
    date: '2022-05-24',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.1107152  0.         0.         0.13780367 0.         0.\n' +
      ' 0.00983642 0.         0.13889626 0.         0.         0.\n' +
      ' 0.03372691 0.         0.         0.11567563 0.0750224  0.10821527\n' +
      ' 0.1079988  0.16210943]',
    maxSharpe: 2.202964134
  },
  {
    date: '2022-05-25',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.14084394 0.         0.00315623 0.         0.         0.\n' +
      ' 0.18175206 0.0085235  0.18934056 0.         0.         0.\n' +
      ' 0.04806656 0.         0.         0.07332343 0.16571358 0.\n' +
      ' 0.18928014 0.        ]',
    maxSharpe: 2.062524791
  },
  {
    date: '2022-05-26',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.         0.         0.134403\n' +
      ' 0.12237403 0.20337113 0.23781391 0.         0.         0.00523487\n' +
      ' 0.         0.         0.         0.06060558 0.         0.03489192\n' +
      ' 0.07176034 0.12954522]',
    maxSharpe: 2.387119435
  },
  {
    date: '2022-05-27',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.12044498 0.         0.         0.         0.03561245\n' +
      ' 0.         0.09917189 0.18904647 0.         0.         0.\n' +
      ' 0.         0.         0.0795425  0.20484519 0.04087948 0.19428998\n' +
      ' 0.03616707 0.        ]',
    maxSharpe: 2.564226176
  },
  {
    date: '2022-05-30',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.12707751 0.         0.         0.         0.         0.11030923\n' +
      ' 0.19801919 0.         0.12266849 0.         0.         0.\n' +
      ' 0.12410438 0.         0.         0.22736155 0.         0.\n' +
      ' 0.09045965 0.        ]',
    maxSharpe: 2.638543125
  },
  {
    date: '2022-05-31',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.04786768 0.         0.         0.         0.         0.11826488\n' +
      ' 0.00943145 0.09600189 0.11034859 0.         0.06210761 0.\n' +
      ' 0.07564898 0.         0.         0.14124531 0.         0.1467761\n' +
      ' 0.19230751 0.        ]',
    maxSharpe: 2.604320569
  },
  {
    date: '2022-06-01',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.17463101 0.01178443 0.         0.         0.         0.15292771\n' +
      ' 0.         0.0705402  0.13637375 0.         0.         0.03048098\n' +
      ' 0.         0.02113391 0.         0.15854476 0.         0.14947929\n' +
      ' 0.         0.09410396]',
    maxSharpe: 2.332366154
  },
  {
    date: '2022-06-02',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.12945459 0.         0.         0.05854458 0.         0.18699219\n' +
      ' 0.         0.         0.10895798 0.         0.01361889 0.\n' +
      ' 0.         0.         0.         0.20980606 0.10200064 0.08435534\n' +
      ' 0.         0.10626973]',
    maxSharpe: 2.331565596
  },
  {
    date: '2022-06-03',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.19624795 0.10286225 0.         0.00720955 0.         0.\n' +
      ' 0.0952648  0.         0.10430539 0.         0.         0.\n' +
      ' 0.         0.12089261 0.         0.17333654 0.         0.0803867\n' +
      ' 0.08133988 0.03815434]',
    maxSharpe: 2.277844333
  },
  {
    date: '2022-06-06',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.00356069 0.         0.         0.00371525 0.         0.\n' +
      ' 0.         0.00398176 0.33471756 0.         0.         0.\n' +
      ' 0.13439463 0.00396692 0.05126924 0.32728703 0.00321333 0.\n' +
      ' 0.         0.13389359]',
    maxSharpe: 2.230304444
  },
  {
    date: '2022-06-07',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.09326284 0.         0.11419511 0.         0.\n' +
      ' 0.09761057 0.         0.14101865 0.         0.         0.04718367\n' +
      ' 0.         0.         0.         0.15664242 0.18013276 0.\n' +
      ' 0.01923954 0.15071445]',
    maxSharpe: 1.344578427
  },
  {
    date: '2022-06-08',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.09511289 0.         0.04394546\n' +
      ' 0.11020562 0.         0.04903647 0.         0.         0.03505159\n' +
      ' 0.16831839 0.01181703 0.         0.20874027 0.         0.\n' +
      ' 0.09511289 0.18265937]',
    maxSharpe: 1.519943144
  },
  {
    date: '2022-06-09',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.14797308 0.         0.06011454\n' +
      ' 0.         0.         0.20843528 0.0008801  0.         0.\n' +
      ' 0.         0.         0.         0.28127867 0.         0.\n' +
      ' 0.14509518 0.15622315]',
    maxSharpe: 2.071096825
  },
  {
    date: '2022-06-10',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.02847096 0.         0.         0.04755671 0.         0.18706962\n' +
      ' 0.         0.13473806 0.11900775 0.         0.         0.\n' +
      ' 0.         0.02740401 0.         0.16579733 0.         0.04710819\n' +
      ' 0.15690286 0.0859445 ]',
    maxSharpe: 1.597038813
  },
  {
    date: '2022-06-13',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.07532389 0.         0.00222212 0.05913231 0.         0.\n' +
      ' 0.25048909 0.         0.25632334 0.01824359 0.         0.\n' +
      ' 0.         0.         0.09925216 0.07381143 0.09139066 0.\n' +
      ' 0.         0.07381143]',
    maxSharpe: 1.690664277
  },
  {
    date: '2022-06-14',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.         0.         0.0123071\n' +
      ' 0.23037851 0.         0.22218764 0.         0.14999738 0.\n' +
      ' 0.00585582 0.         0.         0.34881284 0.01251072 0.\n' +
      ' 0.         0.01794999]',
    maxSharpe: 1.667749932
  },
  {
    date: '2022-06-15',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.16320567 0.02519097 0.         0.         0.         0.\n' +
      ' 0.05189676 0.21141383 0.18682888 0.         0.         0.\n' +
      ' 0.         0.         0.05445975 0.17482345 0.06988548 0.00783546\n' +
      ' 0.05445975 0.        ]',
    maxSharpe: 1.554999493
  },
  {
    date: '2022-06-16',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.07747999 0.07274741 0.         0.         0.         0.04987147\n' +
      ' 0.0943505  0.         0.18806494 0.         0.         0.\n' +
      ' 0.         0.16023851 0.06282852 0.29441865 0.         0.\n' +
      ' 0.         0.        ]',
    maxSharpe: 1.729780606
  },
  {
    date: '2022-06-17',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.02859056 0.         0.         0.         0.         0.\n' +
      ' 0.         0.18440873 0.15440903 0.         0.02186233 0.\n' +
      ' 0.03317557 0.05581171 0.         0.2264589  0.04228988 0.\n' +
      ' 0.09973379 0.15325951]',
    maxSharpe: 1.747956698
  },
  {
    date: '2022-06-20',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.14259907 0.         0.05736002 0.03464559 0.02876788 0.11991758\n' +
      ' 0.14008109 0.11089141 0.16909654 0.         0.         0.\n' +
      ' 0.         0.         0.         0.10127267 0.         0.09536816\n' +
      ' 0.         0.        ]',
    maxSharpe: 1.303217619
  },
  {
    date: '2022-06-21',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.         0.         0.\n' +
      ' 0.02626255 0.         0.19226091 0.         0.         0.05791175\n' +
      ' 0.01827874 0.         0.         0.19534605 0.         0.13231588\n' +
      ' 0.17496089 0.20266324]',
    maxSharpe: 1.920733388
  },
  {
    date: '2022-06-22',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.13274052 0.         0.         0.07709823 0.         0.06266591\n' +
      ' 0.30762054 0.03176783 0.1882803  0.         0.         0.\n' +
      ' 0.         0.         0.07651589 0.         0.01192257 0.06901556\n' +
      ' 0.04237265 0.        ]',
    maxSharpe: 1.345711766
  },
  {
    date: '2022-06-23',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.07327408 0.         0.\n' +
      ' 0.16059484 0.         0.13197741 0.         0.         0.00915977\n' +
      ' 0.02352    0.06158332 0.         0.1594506  0.         0.\n' +
      ' 0.20454954 0.17589044]',
    maxSharpe: 1.981143201
  },
  {
    date: '2022-06-24',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.05676643 0.         0.0110862\n' +
      ' 0.05676643 0.03595328 0.29372747 0.         0.         0.\n' +
      ' 0.26662206 0.         0.05931693 0.13419672 0.08556447 0.\n' +
      ' 0.         0.        ]',
    maxSharpe: 1.6744629
  },
  {
    date: '2022-06-27',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.00926221 0.         0.         0.         0.         0.05178978\n' +
      ' 0.1293771  0.         0.36625982 0.         0.         0.\n' +
      ' 0.         0.         0.01510283 0.20459352 0.         0.\n' +
      ' 0.         0.22361475]',
    maxSharpe: 2.33088971
  },
  {
    date: '2022-06-28',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.05431401 0.         0.         0.10951954 0.         0.07449279\n' +
      ' 0.16730667 0.         0.1207846  0.         0.         0.\n' +
      ' 0.         0.         0.         0.16123374 0.05818846 0.096622\n' +
      ' 0.15374725 0.00379095]',
    maxSharpe: 1.794221264
  },
  {
    date: '2022-06-29',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[2.82469115e-02 0.00000000e+00 9.56761894e-05 7.82351728e-02\n' +
      ' 0.00000000e+00 0.00000000e+00 0.00000000e+00 2.81342903e-02\n' +
      ' 2.73518870e-01 0.00000000e+00 0.00000000e+00 0.00000000e+00\n' +
      ' 0.00000000e+00 7.92241793e-03 0.00000000e+00 2.88198930e-01\n' +
      ' 2.21066903e-02 0.00000000e+00 0.00000000e+00 2.73541041e-01]',
    maxSharpe: 2.2698091
  },
  {
    date: '2022-06-30',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.06299704 0.         0.01604678 0.         0.\n' +
      ' 0.232135   0.         0.22731095 0.         0.         0.06671843\n' +
      ' 0.         0.07084227 0.         0.19700438 0.         0.11081997\n' +
      ' 0.01612518 0.        ]',
    maxSharpe: 1.860959923
  },
  {
    date: '2022-07-01',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.11886618 0.04086821 0.04258233 0.0631162  0.         0.\n' +
      ' 0.21182473 0.10185154 0.09828781 0.         0.         0.\n' +
      ' 0.         0.         0.         0.16367854 0.         0.\n' +
      ' 0.15892446 0.        ]',
    maxSharpe: 1.63749539
  },
  {
    date: '2022-07-04',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.07648447 0.         0.07733359\n' +
      ' 0.18166928 0.         0.14549123 0.         0.         0.\n' +
      ' 0.07423139 0.         0.13465677 0.18687596 0.         0.\n' +
      ' 0.12325731 0.        ]',
    maxSharpe: 1.854954282
  },
  {
    date: '2022-07-05',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.13699023 0.         0.         0.0541895  0.         0.\n' +
      ' 0.31532777 0.         0.27822809 0.01505019 0.         0.\n' +
      ' 0.         0.006166   0.         0.19404822 0.         0.\n' +
      ' 0.         0.        ]',
    maxSharpe: 2.149417301
  },
  {
    date: '2022-07-06',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.00669424 0.         0.1578708  0.         0.1752414\n' +
      ' 0.01246394 0.16294957 0.18884041 0.         0.         0.\n' +
      ' 0.         0.         0.         0.21447317 0.         0.\n' +
      ' 0.08146648 0.        ]',
    maxSharpe: 1.625703783
  },
  {
    date: '2022-07-07',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.03694404 0.         0.03494885\n' +
      ' 0.15177505 0.18166773 0.12013774 0.         0.         0.\n' +
      ' 0.         0.         0.         0.17144623 0.         0.10500237\n' +
      ' 0.19807799 0.        ]',
    maxSharpe: 1.787790135
  },
  {
    date: '2022-07-08',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.14007229 0.         0.         0.03031786 0.         0.01344809\n' +
      ' 0.10244056 0.03217058 0.15248971 0.         0.         0.\n' +
      ' 0.         0.         0.         0.13769657 0.12124278 0.\n' +
      ' 0.14966444 0.12045712]',
    maxSharpe: 1.842999908
  },
  {
    date: '2022-07-11',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.26964276 0.         0.00321738 0.         0.         0.\n' +
      ' 0.08845752 0.12617798 0.19024347 0.         0.         0.\n' +
      ' 0.         0.         0.         0.19437229 0.         0.03390032\n' +
      ' 0.09068677 0.0033015 ]',
    maxSharpe: 1.702299654
  },
  {
    date: '2022-07-12',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.01137273 0.         0.07083024 0.         0.\n' +
      ' 0.13037198 0.         0.11250708 0.         0.         0.\n' +
      ' 0.17736746 0.02201317 0.04110961 0.19557498 0.04874304 0.\n' +
      ' 0.19010972 0.        ]',
    maxSharpe: 1.755151671
  },
  {
    date: '2022-07-13',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.         0.         0.\n' +
      ' 0.05375568 0.12815979 0.30388767 0.02681236 0.         0.03074372\n' +
      ' 0.         0.         0.         0.17052583 0.0848055  0.\n' +
      ' 0.20130944 0.        ]',
    maxSharpe: 1.827432679
  },
  {
    date: '2022-07-14',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.10016965 0.         0.         0.13977316 0.00797396 0.\n' +
      ' 0.06152839 0.         0.19376037 0.01032485 0.         0.\n' +
      ' 0.         0.1618142  0.         0.13632553 0.10016965 0.08816026\n' +
      ' 0.         0.        ]',
    maxSharpe: 1.285414786
  },
  {
    date: '2022-07-15',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.09487236 0.         0.01150613\n' +
      ' 0.         0.         0.30684643 0.         0.         0.04480615\n' +
      ' 0.         0.07484613 0.18126174 0.1969868  0.         0.\n' +
      ' 0.08887425 0.        ]',
    maxSharpe: 1.726155884
  },
  {
    date: '2022-07-18',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.05846382 0.         0.         0.         0.         0.1920051\n' +
      ' 0.13531393 0.         0.23695811 0.03696091 0.         0.\n' +
      ' 0.         0.         0.01638468 0.22242085 0.03477716 0.\n' +
      ' 0.06671543 0.        ]',
    maxSharpe: 1.93626364
  },
  {
    date: '2022-07-19',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.12542528 0.10057738 0.         0.02802164 0.         0.06987789\n' +
      ' 0.11403568 0.         0.19767589 0.         0.         0.\n' +
      ' 0.         0.         0.         0.11062116 0.         0.\n' +
      ' 0.10544206 0.14832302]',
    maxSharpe: 1.866159854
  },
  {
    date: '2022-07-20',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.02388387 0.12181274 0.         0.\n' +
      ' 0.         0.         0.23379119 0.         0.         0.03508976\n' +
      ' 0.04205174 0.01857201 0.         0.0594216  0.03963305 0.\n' +
      ' 0.17471734 0.2510267 ]',
    maxSharpe: 1.535400199
  },
  {
    date: '2022-07-21',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.04366078 0.         0.\n' +
      ' 0.10717025 0.         0.28730248 0.         0.         0.\n' +
      ' 0.         0.         0.16014579 0.31389909 0.         0.05877711\n' +
      ' 0.         0.02904449]',
    maxSharpe: 2.202135423
  },
  {
    date: '2022-07-22',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.00432389 0.         0.         0.05171567 0.         0.15626335\n' +
      ' 0.         0.0814029  0.20033891 0.         0.         0.\n' +
      ' 0.09364383 0.06480819 0.07187934 0.17796808 0.         0.\n' +
      ' 0.         0.09765584]',
    maxSharpe: 1.655869235
  },
  {
    date: '2022-07-25',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.04256707 0.         0.         0.0730013  0.         0.\n' +
      ' 0.         0.0787371  0.20396708 0.05332655 0.         0.02612536\n' +
      ' 0.14142117 0.         0.         0.15730228 0.         0.07922243\n' +
      ' 0.14432966 0.        ]',
    maxSharpe: 1.373047727
  },
  {
    date: '2022-07-26',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.09673059 0.         0.         0.05536383 0.         0.\n' +
      ' 0.04014263 0.         0.2020914  0.         0.         0.\n' +
      ' 0.15199122 0.0461477  0.         0.15506851 0.         0.09673059\n' +
      ' 0.13995633 0.01577719]',
    maxSharpe: 1.873103143
  },
  {
    date: '2022-07-27',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.17247344 0.         0.08404795\n' +
      ' 0.         0.06045148 0.25375304 0.         0.         0.\n' +
      ' 0.17773276 0.         0.         0.16802628 0.         0.01854968\n' +
      ' 0.         0.06496538]',
    maxSharpe: 1.600022868
  },
  {
    date: '2022-07-28',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.00716392 0.         0.04107887 0.0451406  0.         0.\n' +
      ' 0.33633331 0.         0.23381954 0.         0.         0.\n' +
      ' 0.         0.0451406  0.0095422  0.14406579 0.         0.00666519\n' +
      ' 0.         0.13104998]',
    maxSharpe: 2.049620727
  },
  {
    date: '2022-07-29',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.17610522 0.11761442 0.03857237\n' +
      ' 0.06744064 0.05313632 0.16441577 0.         0.         0.\n' +
      ' 0.         0.         0.         0.27553239 0.         0.\n' +
      ' 0.10718287 0.        ]',
    maxSharpe: 1.595845784
  },
  {
    date: '2022-08-01',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.02988952 0.         0.15687175\n' +
      ' 0.11861982 0.15189529 0.18252559 0.         0.         0.\n' +
      ' 0.         0.         0.         0.14094838 0.04005542 0.02853304\n' +
      ' 0.15066121 0.        ]',
    maxSharpe: 1.887563797
  },
  {
    date: '2022-08-02',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.         0.         0.08924375\n' +
      ' 0.03241025 0.         0.22520188 0.01688438 0.         0.\n' +
      ' 0.         0.12692792 0.02728223 0.20168726 0.10620852 0.03687001\n' +
      ' 0.1372838  0.        ]',
    maxSharpe: 1.707862656
  },
  {
    date: '2022-08-03',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.         0.         0.15793255\n' +
      ' 0.10628013 0.03919817 0.27171327 0.         0.         0.\n' +
      ' 0.00405214 0.         0.         0.14949561 0.         0.15774169\n' +
      ' 0.03919817 0.07438827]',
    maxSharpe: 1.984925355
  },
  {
    date: '2022-08-04',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.11095622 0.14307519 0.         0.0419848  0.         0.06765411\n' +
      ' 0.         0.         0.21777668 0.         0.         0.\n' +
      ' 0.01255182 0.         0.09652387 0.19331019 0.         0.\n' +
      ' 0.         0.11616713]',
    maxSharpe: 1.622521984
  },
  {
    date: '2022-08-05',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.03684818 0.         0.00337623 0.11194247 0.         0.\n' +
      ' 0.1343797  0.         0.25134964 0.         0.         0.\n' +
      ' 0.         0.         0.         0.2227123  0.09503596 0.\n' +
      ' 0.         0.14435552]',
    maxSharpe: 2.187552802
  },
  {
    date: '2022-08-08',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.         0.         0.09458469\n' +
      ' 0.23717799 0.         0.1574425  0.         0.         0.\n' +
      ' 0.         0.         0.         0.14249035 0.         0.\n' +
      ' 0.1876708  0.18063367]',
    maxSharpe: 2.106671193
  },
  {
    date: '2022-08-09',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.         0.         0.00488876\n' +
      ' 0.08292789 0.080791   0.26685371 0.         0.         0.\n' +
      ' 0.02154507 0.         0.         0.05846604 0.         0.10812049\n' +
      ' 0.22803118 0.14837586]',
    maxSharpe: 1.825992545
  },
  {
    date: '2022-08-10',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.10179824 0.         0.\n' +
      ' 0.17250347 0.1273983  0.2056171  0.00325427 0.         0.\n' +
      ' 0.         0.         0.         0.09126746 0.         0.07175828\n' +
      ' 0.         0.22640289]',
    maxSharpe: 1.791356243
  },
  {
    date: '2022-08-11',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.1715473  0.         0.08628745\n' +
      ' 0.14229939 0.         0.16978193 0.         0.05835484 0.\n' +
      ' 0.01217144 0.         0.         0.15219709 0.         0.\n' +
      ' 0.20736055 0.        ]',
    maxSharpe: 1.536998473
  },
  {
    date: '2022-08-12',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.00204631 0.         0.         0.         0.         0.\n' +
      ' 0.         0.         0.31975523 0.         0.05391968 0.\n' +
      ' 0.         0.         0.         0.48623861 0.         0.\n' +
      ' 0.13804017 0.        ]',
    maxSharpe: 2.246257307
  },
  {
    date: '2022-08-15',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.15254025 0.         0.         0.         0.         0.\n' +
      ' 0.14846352 0.         0.16882622 0.         0.0247882  0.\n' +
      ' 0.         0.         0.         0.27813462 0.         0.\n' +
      ' 0.12989657 0.09735061]',
    maxSharpe: 2.186415901
  },
  {
    date: '2022-08-16',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.03611144 0.         0.\n' +
      ' 0.16102818 0.         0.13177206 0.         0.         0.03656274\n' +
      ' 0.07413433 0.05399661 0.         0.21009436 0.         0.12305513\n' +
      ' 0.         0.17324515]',
    maxSharpe: 1.87478606
  },
  {
    date: '2022-08-17',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.02889936 0.02963661 0.         0.         0.         0.\n' +
      ' 0.11785096 0.         0.20750993 0.         0.         0.11314527\n' +
      ' 0.00072497 0.         0.06303209 0.18143142 0.         0.\n' +
      ' 0.12663576 0.13113365]',
    maxSharpe: 1.827596723
  },
  {
    date: '2022-08-18',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.08354303 0.         0.1649193\n' +
      ' 0.10895165 0.         0.2212341  0.         0.         0.\n' +
      ' 0.01688431 0.01688431 0.         0.20869629 0.03557302 0.143314\n' +
      ' 0.         0.        ]',
    maxSharpe: 1.961451837
  },
  {
    date: '2022-08-19',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.04435988 0.         0.10943917 0.         0.\n' +
      ' 0.15098073 0.06634495 0.24605519 0.         0.         0.\n' +
      ' 0.         0.04594799 0.06590379 0.2709683  0.         0.\n' +
      ' 0.         0.        ]',
    maxSharpe: 2.070184203
  },
  {
    date: '2022-08-22',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.0079169  0.         0.         0.02173955\n' +
      ' 0.23511506 0.         0.28409182 0.         0.         0.\n' +
      ' 0.         0.11732755 0.         0.1439355  0.         0.\n' +
      ' 0.18987361 0.        ]',
    maxSharpe: 2.070350474
  },
  {
    date: '2022-08-23',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.05360971 0.         0.         0.         0.         0.17220788\n' +
      ' 0.14571409 0.         0.0760461  0.         0.         0.\n' +
      ' 0.         0.         0.         0.29151441 0.         0.\n' +
      ' 0.17220788 0.08869992]',
    maxSharpe: 1.970538247
  },
  {
    date: '2022-08-24',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.15741958 0.         0.         0.10654431 0.         0.01842498\n' +
      ' 0.0362233  0.         0.2208209  0.         0.         0.\n' +
      ' 0.         0.         0.         0.16976426 0.         0.\n' +
      ' 0.24748618 0.0433165 ]',
    maxSharpe: 1.942133981
  },
  {
    date: '2022-08-25',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.01850339 0.         0.01372484 0.         0.06284654\n' +
      ' 0.22747568 0.         0.18849877 0.         0.         0.\n' +
      ' 0.08848623 0.08863381 0.         0.13110028 0.         0.\n' +
      ' 0.05295903 0.12777143]',
    maxSharpe: 1.970875237
  },
  {
    date: '2022-08-26',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.01698858 0.04133112 0.         0.05385041 0.         0.16246681\n' +
      ' 0.15615039 0.04022544 0.16793398 0.         0.         0.\n' +
      ' 0.         0.         0.         0.16844688 0.         0.\n' +
      ' 0.124647   0.06795938]',
    maxSharpe: 2.081147209
  },
  {
    date: '2022-08-29',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.         0.06371409 0.04217904 0.\n' +
      ' 0.1532709  0.         0.21925802 0.         0.         0.\n' +
      ' 0.         0.         0.15141956 0.07445722 0.02023161 0.\n' +
      ' 0.07394812 0.20152144]',
    maxSharpe: 1.681364671
  },
  {
    date: '2022-08-30',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.         0.06686396 0.         0.         0.\n' +
      ' 0.23826939 0.         0.25815667 0.         0.03385655 0.\n' +
      ' 0.         0.         0.08937678 0.11167466 0.07118908 0.\n' +
      ' 0.13061291 0.        ]',
    maxSharpe: 1.694356927
  },
  {
    date: '2022-08-31',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.09037142 0.         0.         0.         0.00199996 0.16455226\n' +
      ' 0.19939289 0.         0.13300242 0.         0.         0.01227757\n' +
      ' 0.         0.         0.05446748 0.19814151 0.09037142 0.\n' +
      ' 0.05542305 0.        ]',
    maxSharpe: 1.772712091
  },
  {
    date: '2022-09-01',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.         0.05608666 0.         0.         0.         0.\n' +
      ' 0.19295279 0.         0.21772471 0.         0.         0.\n' +
      ' 0.09396054 0.         0.         0.11806223 0.09960914 0.01362271\n' +
      ' 0.         0.20798122]',
    maxSharpe: 1.877608866
  },
  {
    date: '2022-09-02',
    stocktickers: "['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'META', 'NVDA', 'JPM', 'PG', 'V', 'HD', 'CVX', 'MA', 'PFE', 'LLY', 'PEP']",
    chromosome: '[0.18552529 0.         0.         0.06175499 0.         0.02665676\n' +
      ' 0.14374188 0.         0.11707684 0.         0.         0.\n' +
      ' 0.         0.         0.         0.23546473 0.09876652 0.04725307\n' +
      ' 0.08375992 0.        ]',
    maxSharpe: 1.861193072
  }
]
//{ x: 'META', y: 35, text: '35%' },
export const getStockportfolio = (date) => {
  let stocktickers = [];
  let chromosome = [];
  for (let i = 0; i < stockportfolio.length; i++) {
    if (date === stockportfolio[i].date) {
      stocktickers = stockportfolio[i].stocktickers.replace('[', '').replace(']', '').replace(/\'/g, "").split(/,\s*/)
      chromosome = stockportfolio[i].chromosome.replace('[', '').replace(']', '').replace(/\'/g, "").split(/\s+/)
      chromosome = chromosome.map(item => Number(item))
    }
  }
  const res = []
  for (let i = 0; i < stocktickers.length; i++) {
    if (chromosome[i] != 0.) {
      //let stockInfo = {}
      //const encodedParams = new URLSearchParams();
      //encodedParams.append("symbol", stocktickers[i]);

      //const options = {
      //  method: 'POST',
      //  url: 'https://yahoo-finance97.p.rapidapi.com/stock-info',
      //  headers: {
      //    'content-type': 'application/x-www-form-urlencoded',
      //    'X-RapidAPI-Key': '6be3939a73msh413d424fc2d04c4p15ba7bjsnd28f29cebde3',
      //    'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
      //  },
      //  data: encodedParams
      //};
      //axios.request(options).then(function (response) {
      //  console.log(response.data);
      //  stockInfo = response.data.data;
      //}).catch(function (error) {
      //  console.error(error);
      //});
      res.push({ x: stocktickers[i], y: chromosome[i], text: (chromosome[i] * 100).toFixed(2) + "%" })
    }
    //res.push({ x: stocktickers[i], y: chromosome[i], text: (chromosome[i] * 100).toFixed(2) + "%" ,stockInfo: stockInfo})

  }
  return res;
}

export const searchData = [
  { StockName: 'Apple Inc.', symbol: 'AAPL' },
  { StockName: 'AAPL', symbol: 'AAPL' },
  { StockName: 'Microsoft Corporation', symbol: 'MSFT' },
  { StockName: 'MSFT', symbol: 'MSFT' },
  { StockName: 'Amazon.com Inc.', symbol: 'AMZN' },
  { StockName: 'AMZN', symbol: 'AMZN' },
  { StockName: 'Tesla Inc', symbol: 'TSLA' },
  { StockName: 'TSLA', symbol: 'TSLA' },
  { StockName: 'Alphabet Inc. Class A', symbol: 'GOOGL' },
  { StockName: 'GOOGL', symbol: 'GOOGL' },
  { StockName: 'Alphabet Inc. Class C', symbol: 'GOOG' },
  { StockName: 'GOOG', symbol: 'GOOG' },
  { StockName: 'Berkshire Hathaway Inc. Class B', symbol: 'BRK.B' },
  { StockName: 'BRK.B', symbol: 'BRK.B' },
  { StockName: 'UnitedHealth Group Incorporated', symbol: 'UNH' },
  { StockName: 'UNH', symbol: 'UNH' },
  { StockName: 'Johnson & Johnson', symbol: 'JNJ' },
  { StockName: 'JNJ', symbol: 'JNJ' },
  { StockName: 'Exxon Mobil Corporation', symbol: 'XOM' },
  { StockName: 'XOM', symbol: 'XOM' },
  { StockName: 'JPMorgan Chase & Co.', symbol: 'JPM' },
  { StockName: 'JPM', symbol: 'JPM' },
  { StockName: 'Procter & Gamble Company', symbol: 'PG' },
  { StockName: 'PG', symbol: 'PG' },
  { StockName: 'Meta Platforms Inc. Class A', symbol: 'META' },
  { StockName: 'META', symbol: 'META' },
  { StockName: 'NVIDIA Corporation', symbol: 'NVDA' },
  { StockName: 'NVDA', symbol: 'NVDA' },
  { StockName: 'Visa Inc. Class A', symbol: 'V' },
  { StockName: 'V', symbol: 'V' },
  { StockName: 'Chevron Corporation', symbol: 'CVX' },
  { StockName: 'CVX', symbol: 'CVX' },
  { StockName: 'Home Depot Inc.', symbol: 'HD' },
  { StockName: 'HD', symbol: 'HD' },
  { StockName: 'Mastercard Incorporated Class A', symbol: 'MA' },
  { StockName: 'MA', symbol: 'MA' },
  { StockName: 'AbbVie Inc.', symbol: 'ABBV' }, { StockName: 'ABBV', symbol: 'ABBV' },
  { StockName: 'Pfizer Inc.', symbol: 'PFE' },
  { StockName: 'PFE', symbol: 'PFE' },
  { StockName: 'Eli Lilly and Company', symbol: 'LLY' },
  { StockName: 'LLY', symbol: 'LLY' },
  { StockName: 'PepsiCo Inc.', symbol: 'PEP' }, { StockName: 'PEP', symbol: 'PEP' },
  { StockName: 'Coca-Cola Company', symbol: 'KO' },
  { StockName: 'KO', symbol: 'KO' }, { StockName: 'Bank of America Corp', symbol: 'BAC' },
  { StockName: 'BAC', symbol: 'BAC' },
  { StockName: 'Merck & Co. Inc.', symbol: 'MRK' },
  { StockName: 'MRK', symbol: 'MRK' }, { StockName: 'Costco Wholesale Corporation', symbol: 'COST' },
  { StockName: 'COST', symbol: 'COST' },
  { StockName: 'Thermo Fisher Scientific Inc.', symbol: 'TMO' },
  { StockName: 'TMO', symbol: 'TMO' },
  { StockName: 'Broadcom Inc.', symbol: 'AVGO' },
  { StockName: 'AVGO', symbol: 'AVGO' }, { StockName: 'Walmart Inc.', symbol: 'WMT' }, { StockName: 'WMT', symbol: 'WMT' }, { StockName: 'Walt Disney Company', symbol: 'DIS' }, { StockName: 'DIS', symbol: 'DIS' },
  { StockName: 'McDonald\'s Corporation', symbol: 'MCD' },
  { StockName: 'MCD', symbol: 'MCD' },
  { StockName: 'Abbott Laboratories', symbol: 'ABT' },
  { StockName: 'ABT', symbol: 'ABT' },
  { StockName: 'Danaher Corporation', symbol: 'DHR' },
  { StockName: 'DHR', symbol: 'DHR' },
  { StockName: 'Cisco Systems Inc.', symbol: 'CSCO' },
  { StockName: 'CSCO', symbol: 'CSCO' },
  { StockName: 'Verizon Communications Inc.', symbol: 'VZ' },
  { StockName: 'VZ', symbol: 'VZ' },
  { StockName: 'Accenture Plc Class A', symbol: 'ACN' },
  { StockName: 'ACN', symbol: 'ACN' },
  { StockName: 'NextEra Energy Inc.', symbol: 'NEE' },
  { StockName: 'NEE', symbol: 'NEE' },
  { StockName: 'Wells Fargo & Company', symbol: 'WFC' },
  { StockName: 'WFC', symbol: 'WFC' },
  { StockName: 'Bristol-Myers Squibb Company', symbol: 'BMY' },
  { StockName: 'BMY', symbol: 'BMY' },
  { StockName: 'Salesforce Inc.', symbol: 'CRM' },
  { StockName: 'CRM', symbol: 'CRM' },
  { StockName: 'Texas Instruments Incorporated', symbol: 'TXN' },
  { StockName: 'TXN', symbol: 'TXN' },
  { StockName: 'Philip Morris International Inc.', symbol: 'PM' },
  { StockName: 'PM', symbol: 'PM' },
  { StockName: 'Comcast Corporation Class A', symbol: 'CMCSA' },
  { StockName: 'CMCSA', symbol: 'CMCSA' },
  { StockName: 'ConocoPhillips', symbol: 'COP' },
  { StockName: 'COP', symbol: 'COP' },
  { StockName: 'QUALCOMM Incorporated', symbol: 'QCOM' },
  { StockName: 'QCOM', symbol: 'QCOM' },
  { StockName: 'Linde plc', symbol: 'LIN' }, { StockName: 'LIN', symbol: 'LIN' },
  { StockName: 'Adobe Incorporated', symbol: 'ADBE' }, { StockName: 'ADBE', symbol: 'ADBE' },
  { StockName: 'CVS Health Corporation', symbol: 'CVS' },
  { StockName: 'CVS', symbol: 'CVS' }, { StockName: 'Union Pacific Corporation', symbol: 'UNP' },
  { StockName: 'UNP', symbol: 'UNP' },
  { StockName: 'NIKE Inc. Class B', symbol: 'NKE' },
  { StockName: 'NKE', symbol: 'NKE' }, { StockName: 'Raytheon Technologies Corporation', symbol: 'RTX' }, { StockName: 'RTX', symbol: 'RTX' }, { StockName: 'United Parcel Service Inc. Class B', symbol: 'UPS' },
  { StockName: 'UPS', symbol: 'UPS' },
  { StockName: 'Amgen Inc.', symbol: 'AMGN' },
  { StockName: 'AMGN', symbol: 'AMGN' },
  { StockName: 'Lowe\'s Companies Inc.', symbol: 'LOW' },
  { StockName: 'LOW', symbol: 'LOW' },
  { StockName: 'Honeywell International Inc.', symbol: 'HON' },
  { StockName: 'HON', symbol: 'HON' },
  { StockName: 'AT&T Inc.', symbol: 'T' },
  { StockName: 'T', symbol: 'T' },
  { StockName: 'Intel Corporation', symbol: 'INTC' },
  { StockName: 'INTC', symbol: 'INTC' },
  { StockName: 'Morgan Stanley', symbol: 'MS' },
  { StockName: 'MS', symbol: 'MS' },
  { StockName: 'International Business Machines Corporation', symbol: 'IBM' }, { StockName: 'IBM', symbol: 'IBM' },
  { StockName: 'Advanced Micro Devices Inc.', symbol: 'AMD' },
  { StockName: 'AMD', symbol: 'AMD' }, { StockName: 'Intuit Inc.', symbol: 'INTU' }, { StockName: 'INTU', symbol: 'INTU' },
  { StockName: 'Elevance Health Inc.', symbol: 'ELV' }, { StockName: 'ELV', symbol: 'ELV' },
  { StockName: 'Medtronic Plc', symbol: 'MDT' },
  { StockName: 'MDT', symbol: 'MDT' },
  { StockName: 'Charles Schwab Corp', symbol: 'SCHW' },
  { StockName: 'SCHW', symbol: 'SCHW' },
  { StockName: 'S&P Global Inc.', symbol: 'SPGI' },
  { StockName: 'SPGI', symbol: 'SPGI' },
  { StockName: 'American Tower Corporation', symbol: 'AMT' }, { StockName: 'AMT', symbol: 'AMT' }, { StockName: 'Goldman Sachs Group Inc.', symbol: 'GS' }, { StockName: 'GS', symbol: 'GS' }, { StockName: 'Netflix Inc.', symbol: 'NFLX' }, { StockName: 'NFLX', symbol: 'NFLX' }, { StockName: 'PayPal Holdings Inc.', symbol: 'PYPL' },
  { StockName: 'PYPL', symbol: 'PYPL' }, { StockName: 'Oracle Corporation', symbol: 'ORCL' }, { StockName: 'ORCL', symbol: 'ORCL' }, { StockName: 'Lockheed Martin Corporation', symbol: 'LMT' }, { StockName: 'LMT', symbol: 'LMT' },
  { StockName: 'Starbucks Corporation', symbol: 'SBUX' },
  { StockName: 'SBUX', symbol: 'SBUX' }, { StockName: 'Deere & Company', symbol: 'DE' },
  { StockName: 'DE', symbol: 'DE' },
  { StockName: 'Automatic Data Processing Inc.', symbol: 'ADP' }, { StockName: 'ADP', symbol: 'ADP' }, { StockName: 'BlackRock Inc.', symbol: 'BLK' }, { StockName: 'BLK', symbol: 'BLK' }, { StockName: 'Caterpillar Inc.', symbol: 'CAT' }, { StockName: 'CAT', symbol: 'CAT' }, { StockName: 'Citigroup Inc.', symbol: 'C' }, { StockName: 'C', symbol: 'C' }, { StockName: 'Cigna Corporation', symbol: 'CI' },
  { StockName: 'CI', symbol: 'CI' },
  { StockName: 'American Express Company', symbol: 'AXP' },
  { StockName: 'AXP', symbol: 'AXP' },
  { StockName: 'Mondelez International Inc. Class A', symbol: 'MDLZ' }, { StockName: 'MDLZ', symbol: 'MDLZ' }, { StockName: 'T-Mobile US Inc.', symbol: 'TMUS' }, { StockName: 'TMUS', symbol: 'TMUS' }, { StockName: 'Southern Company', symbol: 'SO' }, { StockName: 'SO', symbol: 'SO' },
  { StockName: 'Prologis Inc.', symbol: 'PLD' }, { StockName: 'PLD', symbol: 'PLD' },
  { StockName: 'Duke Energy Corporation', symbol: 'DUK' }, { StockName: 'DUK', symbol: 'DUK' }, { StockName: 'Gilead Sciences Inc.', symbol: 'GILD' },
  { StockName: 'GILD', symbol: 'GILD' }, { StockName: 'ServiceNow Inc.', symbol: 'NOW' }, { StockName: 'NOW', symbol: 'NOW' }, { StockName: 'Altria Group Inc', symbol: 'MO' },
  { StockName: 'MO', symbol: 'MO' }, { StockName: 'Boeing Company', symbol: 'BA' }, { StockName: 'BA', symbol: 'BA' },
  { StockName: 'Analog Devices Inc.', symbol: 'ADI' },
  { StockName: 'ADI', symbol: 'ADI' },
  { StockName: 'Chubb Limited', symbol: 'CB' }, { StockName: 'CB', symbol: 'CB' }, { StockName: 'Marsh & McLennan Companies Inc.', symbol: 'MMC' }, { StockName: 'MMC', symbol: 'MMC' }, { StockName: 'Regeneron Pharmaceuticals Inc.', symbol: 'REGN' }, { StockName: 'REGN', symbol: 'REGN' },
  { StockName: 'Applied Materials Inc.', symbol: 'AMAT' },
  { StockName: 'AMAT', symbol: 'AMAT' },
  { StockName: 'Vertex Pharmaceuticals Incorporated', symbol: 'VRTX' }, { StockName: 'VRTX', symbol: 'VRTX' }, { StockName: 'TJX Companies Inc', symbol: 'TJX' }, { StockName: 'TJX', symbol: 'TJX' }, { StockName: 'Northrop Grumman Corp.', symbol: 'NOC' }, { StockName: 'NOC', symbol: 'NOC' }, { StockName: 'General Electric Company', symbol: 'GE' },
  { StockName: 'GE', symbol: 'GE' },
  { StockName: 'Progressive Corporation', symbol: 'PGR' },
  { StockName: 'PGR', symbol: 'PGR' }, { StockName: 'Target Corporation', symbol: 'TGT' },
  { StockName: 'TGT', symbol: 'TGT' },
  { StockName: 'Stryker Corporation', symbol: 'SYK' }, { StockName: 'SYK', symbol: 'SYK' }, { StockName: 'Zoetis Inc. Class A', symbol: 'ZTS' }, { StockName: 'ZTS', symbol: 'ZTS' }, { StockName: 'EOG Resources Inc.', symbol: 'EOG' }, { StockName: 'EOG', symbol: 'EOG' },
  { StockName: 'Intuitive Surgical Inc.', symbol: 'ISRG' }, { StockName: 'ISRG', symbol: 'ISRG' }, { StockName: 'Booking Holdings Inc.', symbol: 'BKNG' }, { StockName: 'BKNG', symbol: 'BKNG' }, { StockName: 'Crown Castle Inc.', symbol: 'CCI' }, { StockName: 'CCI', symbol: 'CCI' }, { StockName: 'Becton Dickinson and Company', symbol: 'BDX' },
  { StockName: 'BDX', symbol: 'BDX' },
  { StockName: 'CME Group Inc. Class A', symbol: 'CME' },
  { StockName: 'CME', symbol: 'CME' },
  { StockName: 'Dominion Energy Inc', symbol: 'D' },
  { StockName: 'D', symbol: 'D' },
  { StockName: 'PNC Financial Services Group Inc.', symbol: 'PNC' }, { StockName: 'PNC', symbol: 'PNC' },
  { StockName: 'Fiserv Inc.', symbol: 'FISV' }, { StockName: 'FISV', symbol: 'FISV' },
  { StockName: '3M Company', symbol: 'MMM' }, { StockName: 'MMM', symbol: 'MMM' },
  { StockName: 'Colgate-Palmolive Company', symbol: 'CL' },
  { StockName: 'CL', symbol: 'CL' },
  { StockName: 'Waste Management Inc.', symbol: 'WM' },
  { StockName: 'WM', symbol: 'WM' },
  { StockName: 'Humana Inc.', symbol: 'HUM' },
  { StockName: 'HUM', symbol: 'HUM' },
  { StockName: 'CSX Corporation', symbol: 'CSX' },
  { StockName: 'CSX', symbol: 'CSX' },
  { StockName: 'Truist Financial Corporation', symbol: 'TFC' },
  { StockName: 'TFC', symbol: 'TFC' },
  { StockName: 'U.S. Bancorp', symbol: 'USB' },
  { StockName: 'USB', symbol: 'USB' },
  { StockName: 'Aon Plc Class A', symbol: 'AON' },
  { StockName: 'AON', symbol: 'AON' },
  { StockName: 'Boston Scientific Corporation', symbol: 'BSX' },
  { StockName: 'BSX', symbol: 'BSX' },
  { StockName: 'Equinix Inc.', symbol: 'EQIX' },
  { StockName: 'EQIX', symbol: 'EQIX' },
  { StockName: 'Micron Technology Inc.', symbol: 'MU' },
  { StockName: 'MU', symbol: 'MU' },
  { StockName: 'Activision Blizzard Inc.', symbol: 'ATVI' },
  { StockName: 'ATVI', symbol: 'ATVI' },
  { StockName: 'Dollar General Corporation', symbol: 'DG' },
  { StockName: 'DG', symbol: 'DG' },
  { StockName: 'General Motors Company', symbol: 'GM' },
  { StockName: 'GM', symbol: 'GM' },
  { StockName: 'Estee Lauder Companies Inc. Class A', symbol: 'EL' },
  { StockName: 'EL', symbol: 'EL' },
  { StockName: 'Pioneer Natural Resources Company', symbol: 'PXD' },
  { StockName: 'PXD', symbol: 'PXD' },
  { StockName: 'Schlumberger NV', symbol: 'SLB' },
  { StockName: 'SLB', symbol: 'SLB' },
  { StockName: 'Eaton Corp. Plc', symbol: 'ETN' },
  { StockName: 'ETN', symbol: 'ETN' },
  { StockName: 'Illinois Tool Works Inc.', symbol: 'ITW' },
  { StockName: 'ITW', symbol: 'ITW' },
  { StockName: 'Lam Research Corporation', symbol: 'LRCX' },
  { StockName: 'LRCX', symbol: 'LRCX' },
  { StockName: 'Norfolk Southern Corporation', symbol: 'NSC' },
  { StockName: 'NSC', symbol: 'NSC' },
  { StockName: 'Air Products and Chemicals Inc.', symbol: 'APD' },
  { StockName: 'APD', symbol: 'APD' },
  { StockName: 'Intercontinental Exchange Inc.', symbol: 'ICE' },
  { StockName: 'ICE', symbol: 'ICE' },
  { StockName: 'Edwards Lifesciences Corporation', symbol: 'EW' },
  { StockName: 'EW', symbol: 'EW' },
  { StockName: 'Sempra Energy', symbol: 'SRE' },
  { StockName: 'SRE', symbol: 'SRE' },
  { StockName: 'General Dynamics Corporation', symbol: 'GD' },
  { StockName: 'GD', symbol: 'GD' },
  { StockName: 'American Electric Power Company Inc.', symbol: 'AEP' },
  { StockName: 'AEP', symbol: 'AEP' },
  { StockName: 'Ford Motor Company', symbol: 'F' },
  { StockName: 'F', symbol: 'F' },
  { StockName: 'McKesson Corporation', symbol: 'MCK' },
  { StockName: 'MCK', symbol: 'MCK' },
  { StockName: 'Sherwin-Williams Company', symbol: 'SHW' },
  { StockName: 'SHW', symbol: 'SHW' },
  { StockName: 'Fidelity National Information Services Inc.', symbol: 'FIS' },
  { StockName: 'FIS', symbol: 'FIS' },
  { StockName: 'General Mills Inc.', symbol: 'GIS' },
  { StockName: 'GIS', symbol: 'GIS' },
  { StockName: 'Archer-Daniels-Midland Company', symbol: 'ADM' },
  { StockName: 'ADM', symbol: 'ADM' },
  { StockName: 'Marathon Petroleum Corporation', symbol: 'MPC' },
  { StockName: 'MPC', symbol: 'MPC' },
  { StockName: 'Public Storage', symbol: 'PSA' },
  { StockName: 'PSA', symbol: 'PSA' },
  { StockName: 'Synopsys Inc.', symbol: 'SNPS' },
  { StockName: 'SNPS', symbol: 'SNPS' },
  { StockName: 'Occidental Petroleum Corporation', symbol: 'OXY' },
  { StockName: 'OXY', symbol: 'OXY' },
  { StockName: 'Centene Corporation', symbol: 'CNC' },
  { StockName: 'CNC', symbol: 'CNC' },
  { StockName: 'Emerson Electric Co.', symbol: 'EMR' },
  { StockName: 'EMR', symbol: 'EMR' },
  { StockName: 'Cadence Design Systems Inc.', symbol: 'CDNS' },
  { StockName: 'CDNS', symbol: 'CDNS' },
  { StockName: 'KLA Corporation', symbol: 'KLAC' },
  { StockName: 'KLAC', symbol: 'KLAC' },
  {
    StockName: 'O\'Reilly Automotive Inc.', symbol: 'ORLY'
  },
  { StockName: 'ORLY', symbol: 'ORLY' },
  { StockName: 'Chipotle Mexican Grill Inc.', symbol: 'CMG' },
  { StockName: 'CMG', symbol: 'CMG' },
  { StockName: 'L3Harris Technologies Inc', symbol: 'LHX' },
  { StockName: 'LHX', symbol: 'LHX' },
  { StockName: 'Corteva Inc', symbol: 'CTVA' },
  { StockName: 'CTVA', symbol: 'CTVA' },
  { StockName: 'MetLife Inc.', symbol: 'MET' },
  { StockName: 'MET', symbol: 'MET' },
  { StockName: 'Valero Energy Corporation', symbol: 'VLO' },
  { StockName: 'VLO', symbol: 'VLO' },
  { StockName: 'Moderna Inc.', symbol: 'MRNA' },
  { StockName: 'MRNA', symbol: 'MRNA' },
  { StockName: 'HCA Healthcare Inc', symbol: 'HCA' },
  { StockName: 'HCA', symbol: 'HCA' },
  { StockName: 'Exelon Corporation', symbol: 'EXC' },
  { StockName: 'EXC', symbol: 'EXC' },
  { StockName: 'Devon Energy Corporation', symbol: 'DVN' },
  { StockName: 'DVN', symbol: 'DVN' },
  { StockName: 'Amphenol Corporation Class A', symbol: 'APH' },
  { StockName: 'APH', symbol: 'APH' },
  { StockName: 'NXP Semiconductors NV', symbol: 'NXPI' },
  { StockName: 'NXPI', symbol: 'NXPI' },
  { StockName: 'Autodesk Inc.', symbol: 'ADSK' },
  { StockName: 'ADSK', symbol: 'ADSK' },
  { StockName: 'Kimberly-Clark Corporation', symbol: 'KMB' },
  { StockName: 'KMB', symbol: 'KMB' },
  { StockName: 'AutoZone Inc.', symbol: 'AZO' },
  { StockName: 'AZO', symbol: 'AZO' },
  { StockName: 'Freeport-McMoRan Inc.', symbol: 'FCX' },
  { StockName: 'FCX', symbol: 'FCX' },
  {
    StockName: 'Moody\'s Corporation', symbol: 'MCO'
  },
  { StockName: 'MCO', symbol: 'MCO' },
  { StockName: 'Roper Technologies Inc.', symbol: 'ROP' },
  { StockName: 'ROP', symbol: 'ROP' },
  { StockName: 'Phillips 66', symbol: 'PSX' },
  { StockName: 'PSX', symbol: 'PSX' },
  { StockName: 'Sysco Corporation', symbol: 'SYY' },
  { StockName: 'SYY', symbol: 'SYY' },
  { StockName: 'Xcel Energy Inc.', symbol: 'XEL' },
  { StockName: 'XEL', symbol: 'XEL' },
  { StockName: 'American International Group Inc.', symbol: 'AIG' },
  { StockName: 'AIG', symbol: 'AIG' },
  { StockName: 'Motorola Solutions Inc.', symbol: 'MSI' },
  { StockName: 'MSI', symbol: 'MSI' },
  { StockName: 'Realty Income Corporation', symbol: 'O' },
  { StockName: 'O', symbol: 'O' },
  { StockName: 'Enphase Energy Inc.', symbol: 'ENPH' },
  { StockName: 'ENPH', symbol: 'ENPH' },
  { StockName: 'Marriott International Inc. Class A', symbol: 'MAR' },
  { StockName: 'MAR', symbol: 'MAR' },
  { StockName: 'Williams Companies Inc.', symbol: 'WMB' },
  { StockName: 'WMB', symbol: 'WMB' },
  { StockName: 'Constellation Brands Inc. Class A', symbol: 'STZ' },
  { StockName: 'STZ', symbol: 'STZ' },
  { StockName: 'Travelers Companies Inc.', symbol: 'TRV' },
  { StockName: 'TRV', symbol: 'TRV' },
  { StockName: 'Paychex Inc.', symbol: 'PAYX' },
  { StockName: 'PAYX', symbol: 'PAYX' },
  { StockName: 'Agilent Technologies Inc.', symbol: 'A' },
  { StockName: 'A', symbol: 'A' },
  { StockName: 'TE Connectivity Ltd.', symbol: 'TEL' },
  { StockName: 'TEL', symbol: 'TEL' },
  { StockName: 'Charter Communications Inc. Class A', symbol: 'CHTR' },
  { StockName: 'CHTR', symbol: 'CHTR' },
  { StockName: 'Ecolab Inc.', symbol: 'ECL' },
  { StockName: 'ECL', symbol: 'ECL' },
  { StockName: 'FedEx Corporation', symbol: 'FDX' },
  { StockName: 'FDX', symbol: 'FDX' },
  { StockName: 'Capital One Financial Corp', symbol: 'COF' },
  { StockName: 'COF', symbol: 'COF' },
  { StockName: 'Arthur J. Gallagher & Co.', symbol: 'AJG' },
  { StockName: 'AJG', symbol: 'AJG' },
  { StockName: 'IQVIA Holdings Inc', symbol: 'IQV' },
  { StockName: 'IQV', symbol: 'IQV' },
  { StockName: 'Johnson Controls International plc', symbol: 'JCI' },
  { StockName: 'JCI', symbol: 'JCI' },
  { StockName: 'Microchip Technology Incorporated', symbol: 'MCHP' },
  { StockName: 'MCHP', symbol: 'MCHP' },
  { StockName: 'Allstate Corporation', symbol: 'ALL' },
  { StockName: 'ALL', symbol: 'ALL' },
  { StockName: 'MSCI Inc. Class A', symbol: 'MSCI' },
  { StockName: 'MSCI', symbol: 'MSCI' },
  { StockName: 'Kinder Morgan Inc Class P', symbol: 'KMI' },
  { StockName: 'KMI', symbol: 'KMI' },
  { StockName: 'Trane Technologies plc', symbol: 'TT' },
  { StockName: 'TT', symbol: 'TT' },
  { StockName: 'Prudential Financial Inc.', symbol: 'PRU' },
  { StockName: 'PRU', symbol: 'PRU' },
  { StockName: 'Consolidated Edison Inc.', symbol: 'ED' },
  { StockName: 'ED', symbol: 'ED' },
  { StockName: 'Aflac Incorporated', symbol: 'AFL' },
  { StockName: 'AFL', symbol: 'AFL' },
  { StockName: 'Newmont Corporation', symbol: 'NEM' },
  { StockName: 'NEM', symbol: 'NEM' },
  { StockName: 'Cintas Corporation', symbol: 'CTAS' },
  { StockName: 'CTAS', symbol: 'CTAS' },
  { StockName: 'Monster Beverage Corporation', symbol: 'MNST' },
  { StockName: 'MNST', symbol: 'MNST' },
  { StockName: 'Hershey Company', symbol: 'HSY' },
  { StockName: 'HSY', symbol: 'HSY' },
  { StockName: 'Hilton Worldwide Holdings Inc', symbol: 'HLT' },
  { StockName: 'HLT', symbol: 'HLT' },
  { StockName: 'M&T Bank Corporation', symbol: 'MTB' },
  { StockName: 'MTB', symbol: 'MTB' },
  { StockName: 'Global Payments Inc.', symbol: 'GPN' },
  { StockName: 'GPN', symbol: 'GPN' },
  { StockName: 'Dow Inc.', symbol: 'DOW' },
  { StockName: 'DOW', symbol: 'DOW' },
  { StockName: 'SBA Communications Corp. Class A', symbol: 'SBAC' },
  { StockName: 'SBAC', symbol: 'SBAC' },
  { StockName: 'Public Service Enterprise Group Inc', symbol: 'PEG' },
  { StockName: 'PEG', symbol: 'PEG' },
  { StockName: 'Parker-Hannifin Corporation', symbol: 'PH' },
  { StockName: 'PH', symbol: 'PH' },
  { StockName: 'Fortinet Inc.', symbol: 'FTNT' },
  { StockName: 'FTNT', symbol: 'FTNT' },
  { StockName: 'Yum! Brands Inc.', symbol: 'YUM' },
  { StockName: 'YUM', symbol: 'YUM' },
  { StockName: 'DexCom Inc.', symbol: 'DXCM' },
  { StockName: 'DXCM', symbol: 'DXCM' },
  { StockName: 'Welltower Inc', symbol: 'WELL' },
  { StockName: 'WELL', symbol: 'WELL' },
  { StockName: 'Hess Corporation', symbol: 'HES' },
  { StockName: 'HES', symbol: 'HES' },
  { StockName: 'Keurig Dr Pepper Inc.', symbol: 'KDP' },
  { StockName: 'KDP', symbol: 'KDP' },
  { StockName: 'Albemarle Corporation', symbol: 'ALB' },
  { StockName: 'ALB', symbol: 'ALB' },
  { StockName: 'WEC Energy Group Inc', symbol: 'WEC' },
  { StockName: 'WEC', symbol: 'WEC' },
  { StockName: 'Cognizant Technology Solutions Corporation Class A', symbol: 'CTSH' },
  { StockName: 'CTSH', symbol: 'CTSH' },
  { StockName: 'ResMed Inc.', symbol: 'RMD' },
  { StockName: 'RMD', symbol: 'RMD' },
  { StockName: 'Electronic Arts Inc.', symbol: 'EA' },
  { StockName: 'EA', symbol: 'EA' },
  { StockName: 'Digital Realty Trust Inc.', symbol: 'DLR' },
  { StockName: 'DLR', symbol: 'DLR' },
  { StockName: 'Carrier Global Corp.', symbol: 'CARR' },
  { StockName: 'CARR', symbol: 'CARR' },
  { StockName: 'Ross Stores Inc.', symbol: 'ROST' },
  { StockName: 'ROST', symbol: 'ROST' },
  { StockName: 'Eversource Energy', symbol: 'ES' },
  { StockName: 'ES', symbol: 'ES' },
  { StockName: 'VICI Properties Inc', symbol: 'VICI' },
  { StockName: 'VICI', symbol: 'VICI' },
  { StockName: 'Bank of New York Mellon Corp', symbol: 'BK' },
  { StockName: 'BK', symbol: 'BK' },
  { StockName: 'Illumina Inc.', symbol: 'ILMN' },
  { StockName: 'ILMN', symbol: 'ILMN' },
  { StockName: 'Simon Property Group Inc.', symbol: 'SPG' },
  { StockName: 'SPG', symbol: 'SPG' },
  { StockName: 'Kroger Co.', symbol: 'KR' },
  { StockName: 'KR', symbol: 'KR' },
  { StockName: 'Republic Services Inc.', symbol: 'RSG' },
  { StockName: 'RSG', symbol: 'RSG' },
  { StockName: 'Cummins Inc.', symbol: 'CMI' },
  { StockName: 'CMI', symbol: 'CMI' },
  { StockName: 'Dollar Tree Inc.', symbol: 'DLTR' },
  { StockName: 'DLTR', symbol: 'DLTR' },
  { StockName: 'Biogen Inc.', symbol: 'BIIB' },
  { StockName: 'BIIB', symbol: 'BIIB' },
  { StockName: 'PACCAR Inc', symbol: 'PCAR' },
  { StockName: 'PCAR', symbol: 'PCAR' },
  { StockName: 'Nucor Corporation', symbol: 'NUE' },
  { StockName: 'NUE', symbol: 'NUE' },
  { StockName: 'Ameriprise Financial Inc.', symbol: 'AMP' },
  { StockName: 'AMP', symbol: 'AMP' },
  { StockName: 'TransDigm Group Incorporated', symbol: 'TDG' },
  { StockName: 'TDG', symbol: 'TDG' },
  { StockName: 'Keysight Technologies Inc', symbol: 'KEYS' },
  { StockName: 'KEYS', symbol: 'KEYS' },
  { StockName: 'ON Semiconductor Corporation', symbol: 'ON' },
  { StockName: 'ON', symbol: 'ON' },
  { StockName: 'Twitter Inc.', symbol: 'TWTR' },
  { StockName: 'TWTR', symbol: 'TWTR' },
  { StockName: 'Baxter International Inc.', symbol: 'BAX' },
  { StockName: 'BAX', symbol: 'BAX' },
  { StockName: 'CoStar Group Inc.', symbol: 'CSGP' },
  { StockName: 'CSGP', symbol: 'CSGP' },
  { StockName: 'Arista Networks Inc.', symbol: 'ANET' },
  { StockName: 'ANET', symbol: 'ANET' },
  { StockName: 'Otis Worldwide Corporation', symbol: 'OTIS' },
  { StockName: 'OTIS', symbol: 'OTIS' },
  { StockName: 'Constellation Energy Corporation', symbol: 'CEG' },
  { StockName: 'CEG', symbol: 'CEG' },
  { StockName: 'IDEXX Laboratories Inc.', symbol: 'IDXX' },
  { StockName: 'IDXX', symbol: 'IDXX' },
  { StockName: 'Verisk Analytics Inc', symbol: 'VRSK' },
  { StockName: 'VRSK', symbol: 'VRSK' },
  { StockName: 'Kraft Heinz Company', symbol: 'KHC' },
  { StockName: 'KHC', symbol: 'KHC' },
  { StockName: 'Fastenal Company', symbol: 'FAST' },
  { StockName: 'FAST', symbol: 'FAST' },
  { StockName: 'AMETEK Inc.', symbol: 'AME' },
  { StockName: 'AME', symbol: 'AME' },
  { StockName: 'Warner Bros. Discovery Inc. Series A', symbol: 'WBD' },
  { StockName: 'WBD', symbol: 'WBD' },
  { StockName: 'PPG Industries Inc.', symbol: 'PPG' },
  { StockName: 'PPG', symbol: 'PPG' },
  { StockName: 'DuPont de Nemours Inc.', symbol: 'DD' },
  { StockName: 'DD', symbol: 'DD' },
  { StockName: 'AvalonBay Communities Inc.', symbol: 'AVB' },
  { StockName: 'AVB', symbol: 'AVB' },
  { StockName: 'Discover Financial Services', symbol: 'DFS' },
  { StockName: 'DFS', symbol: 'DFS' },
  { StockName: 'Rockwell Automation Inc.', symbol: 'ROK' },
  { StockName: 'ROK', symbol: 'ROK' },
  { StockName: 'American Water Works Company Inc.', symbol: 'AWK' },
  { StockName: 'AWK', symbol: 'AWK' },
  { StockName: 'Mettler-Toledo International Inc.', symbol: 'MTD' },
  { StockName: 'MTD', symbol: 'MTD' },
  { StockName: 'ONEOK Inc.', symbol: 'OKE' },
  { StockName: 'OKE', symbol: 'OKE' },
  { StockName: 'Edison International', symbol: 'EIX' },
  { StockName: 'EIX', symbol: 'EIX' },
  { StockName: 'International Flavors & Fragrances Inc.', symbol: 'IFF' },
  { StockName: 'IFF', symbol: 'IFF' },
  { StockName: 'First Republic Bank', symbol: 'FRC' },
  { StockName: 'FRC', symbol: 'FRC' },
  { StockName: 'T. Rowe Price Group', symbol: 'TROW' },
  { StockName: 'TROW', symbol: 'TROW' },
  { StockName: 'DTE Energy Company', symbol: 'DTE' },
  { StockName: 'DTE', symbol: 'DTE' },
  { StockName: 'Halliburton Company', symbol: 'HAL' },
  { StockName: 'HAL', symbol: 'HAL' },
  { StockName: 'State Street Corporation', symbol: 'STT' },
  { StockName: 'STT', symbol: 'STT' },
  { StockName: 'Walgreens Boots Alliance Inc.', symbol: 'WBA' },
  { StockName: 'WBA', symbol: 'WBA' },
  { StockName: 'CBRE Group Inc. Class A', symbol: 'CBRE' },
  { StockName: 'CBRE', symbol: 'CBRE' },
  { StockName: 'HP Inc.', symbol: 'HPQ' },
  { StockName: 'HPQ', symbol: 'HPQ' },
  { StockName: 'Corning Inc', symbol: 'GLW' },
  { StockName: 'GLW', symbol: 'GLW' },
  { StockName: 'Aptiv PLC', symbol: 'APTV' },
  { StockName: 'APTV', symbol: 'APTV' },
  { StockName: 'Baker Hughes Company Class A', symbol: 'BKR' },
  { StockName: 'BKR', symbol: 'BKR' },
  { StockName: 'Equity Residential', symbol: 'EQR' },
  { StockName: 'EQR', symbol: 'EQR' },
  { StockName: 'Extra Space Storage Inc.', symbol: 'EXR' },
  { StockName: 'EXR', symbol: 'EXR' },
  { StockName: 'Entergy Corporation', symbol: 'ETR' },
  { StockName: 'ETR', symbol: 'ETR' },
  { StockName: 'Ameren Corporation', symbol: 'AEE' },
  { StockName: 'AEE', symbol: 'AEE' },
  { StockName: 'W.W. Grainger Inc.', symbol: 'GWW' },
  { StockName: 'GWW', symbol: 'GWW' },
  { StockName: 'Old Dominion Freight Line Inc.', symbol: 'ODFL' },
  { StockName: 'ODFL', symbol: 'ODFL' },
  { StockName: 'Willis Towers Watson Public Limited Company', symbol: 'WTW' },
  { StockName: 'WTW', symbol: 'WTW' },
  { StockName: 'Coterra Energy Inc.', symbol: 'CTRA' },
  { StockName: 'CTRA', symbol: 'CTRA' },
  { StockName: 'Fifth Third Bancorp', symbol: 'FITB' },
  { StockName: 'FITB', symbol: 'FITB' },
  { StockName: 'Diamondback Energy Inc.', symbol: 'FANG' },
  { StockName: 'FANG', symbol: 'FANG' },
  { StockName: 'D.R. Horton Inc.', symbol: 'DHI' },
  { StockName: 'DHI', symbol: 'DHI' },
  { StockName: 'Zimmer Biomet Holdings Inc.', symbol: 'ZBH' },
  { StockName: 'ZBH', symbol: 'ZBH' },
  { StockName: 'Copart Inc.', symbol: 'CPRT' },
  { StockName: 'CPRT', symbol: 'CPRT' },
  { StockName: 'Gartner Inc.', symbol: 'IT' },
  { StockName: 'IT', symbol: 'IT' },
  { StockName: 'FirstEnergy Corp.', symbol: 'FE' },
  { StockName: 'FE', symbol: 'FE' },
  { StockName: 'Genuine Parts Company', symbol: 'GPC' },
  { StockName: 'GPC', symbol: 'GPC' },
  { StockName: 'CDW Corp.', symbol: 'CDW' },
  { StockName: 'CDW', symbol: 'CDW' },
  { StockName: 'Weyerhaeuser Company', symbol: 'WY' },
  { StockName: 'WY', symbol: 'WY' },
  { StockName: 'AmerisourceBergen Corporation', symbol: 'ABC' },
  { StockName: 'ABC', symbol: 'ABC' },
  { StockName: 'Fortive Corp.', symbol: 'FTV' },
  { StockName: 'FTV', symbol: 'FTV' },
  { StockName: 'eBay Inc.', symbol: 'EBAY' },
  { StockName: 'EBAY', symbol: 'EBAY' },
  { StockName: 'PPL Corporation', symbol: 'PPL' },
  { StockName: 'PPL', symbol: 'PPL' },
  { StockName: 'EPAM Systems Inc.', symbol: 'EPAM' },
  { StockName: 'EPAM', symbol: 'EPAM' },
  { StockName: 'Alexandria Real Estate Equities Inc.', symbol: 'ARE' },
  { StockName: 'ARE', symbol: 'ARE' },
  { StockName: 'Ulta Beauty Inc.', symbol: 'ULTA' },
  { StockName: 'ULTA', symbol: 'ULTA' },
  { StockName: 'Tractor Supply Company', symbol: 'TSCO' },
  { StockName: 'TSCO', symbol: 'TSCO' },
  { StockName: 'Vulcan Materials Company', symbol: 'VMC' },
  { StockName: 'VMC', symbol: 'VMC' },
  { StockName: 'Equifax Inc.', symbol: 'EFX' },
  { StockName: 'EFX', symbol: 'EFX' },
  { StockName: 'Tyson Foods Inc. Class A', symbol: 'TSN' },
  { StockName: 'TSN', symbol: 'TSN' },
  { StockName: 'Raymond James Financial Inc.', symbol: 'RJF' },
  { StockName: 'RJF', symbol: 'RJF' },
  { StockName: 'Invitation Homes Inc.', symbol: 'INVH' },
  { StockName: 'INVH', symbol: 'INVH' },
  { StockName: 'Martin Marietta Materials Inc.', symbol: 'MLM' },
  { StockName: 'MLM', symbol: 'MLM' },
  { StockName: 'CF Industries Holdings Inc.', symbol: 'CF' },
  { StockName: 'CF', symbol: 'CF' },
  { StockName: 'Hartford Financial Services Group Inc.', symbol: 'HIG' },
  { StockName: 'HIG', symbol: 'HIG' },
  { StockName: 'Lennar Corporation Class A', symbol: 'LEN' },
  { StockName: 'LEN', symbol: 'LEN' },
  { StockName: 'Regions Financial Corporation', symbol: 'RF' },
  { StockName: 'RF', symbol: 'RF' },
  { StockName: 'ANSYS Inc.', symbol: 'ANSS' },
  { StockName: 'ANSS', symbol: 'ANSS' },
  { StockName: 'SVB Financial Group', symbol: 'SIVB' },
  { StockName: 'SIVB', symbol: 'SIVB' },
  { StockName: 'Nasdaq Inc.', symbol: 'NDAQ' },
  { StockName: 'NDAQ', symbol: 'NDAQ' },
  { StockName: 'CenterPoint Energy Inc.', symbol: 'CNP' },
  { StockName: 'CNP', symbol: 'CNP' },
  { StockName: 'Duke Realty Corporation', symbol: 'DRE' },
  { StockName: 'DRE', symbol: 'DRE' },
  { StockName: 'Southwest Airlines Co.', symbol: 'LUV' },
  { StockName: 'LUV', symbol: 'LUV' },
  { StockName: 'Laboratory Corporation of America Holdings', symbol: 'LH' },
  { StockName: 'LH', symbol: 'LH' },
  { StockName: 'Huntington Bancshares Incorporated', symbol: 'HBAN' },
  { StockName: 'HBAN', symbol: 'HBAN' },
  { StockName: 'Quanta Services Inc.', symbol: 'PWR' },
  { StockName: 'PWR', symbol: 'PWR' },
  { StockName: 'Molina Healthcare Inc.', symbol: 'MOH' },
  { StockName: 'MOH', symbol: 'MOH' },
  { StockName: 'United Rentals Inc.', symbol: 'URI' },
  { StockName: 'URI', symbol: 'URI' },
  { StockName: 'LyondellBasell Industries NV', symbol: 'LYB' },
  { StockName: 'LYB', symbol: 'LYB' },
  { StockName: 'Delta Air Lines Inc.', symbol: 'DAL' },
  { StockName: 'DAL', symbol: 'DAL' },
  { StockName: 'CMS Energy Corporation', symbol: 'CMS' },
  { StockName: 'CMS', symbol: 'CMS' },
  { StockName: 'McCormick & Company Incorporated', symbol: 'MKC' },
  { StockName: 'MKC', symbol: 'MKC' },
  { StockName: 'Cardinal Health Inc.', symbol: 'CAH' },
  { StockName: 'CAH', symbol: 'CAH' },
  { StockName: 'West Pharmaceutical Services Inc.', symbol: 'WST' },
  { StockName: 'WST', symbol: 'WST' },
  { StockName: 'Kellogg Company', symbol: 'K' },
  { StockName: 'K', symbol: 'K' },
  { StockName: 'Northern Trust Corporation', symbol: 'NTRS' },
  { StockName: 'NTRS', symbol: 'NTRS' },
  { StockName: 'Church & Dwight Co. Inc.', symbol: 'CHD' },
  { StockName: 'CHD', symbol: 'CHD' },
  { StockName: 'Mosaic Company', symbol: 'MOS' },
  { StockName: 'MOS', symbol: 'MOS' },
  { StockName: 'Mid-America Apartment Communities Inc.', symbol: 'MAA' },
  { StockName: 'MAA', symbol: 'MAA' },
  { StockName: 'Broadridge Financial Solutions Inc.', symbol: 'BR' },
  { StockName: 'BR', symbol: 'BR' },
  { StockName: 'Take-Two Interactive Software Inc.', symbol: 'TTWO' },
  { StockName: 'TTWO', symbol: 'TTWO' },
  { StockName: 'Ingersoll Rand Inc.', symbol: 'IR' },
  { StockName: 'IR', symbol: 'IR' },
  { StockName: 'Principal Financial Group Inc.', symbol: 'PFG' },
  { StockName: 'PFG', symbol: 'PFG' },
  { StockName: 'Ventas Inc.', symbol: 'VTR' },
  { StockName: 'VTR', symbol: 'VTR' },
  { StockName: 'STERIS Plc', symbol: 'STE' },
  { StockName: 'STE', symbol: 'STE' },
  { StockName: 'Citizens Financial Group Inc.', symbol: 'CFG' },
  { StockName: 'CFG', symbol: 'CFG' },
  { StockName: 'Clorox Company', symbol: 'CLX' },
  { StockName: 'CLX', symbol: 'CLX' },
  { StockName: 'Dover Corporation', symbol: 'DOV' },
  { StockName: 'DOV', symbol: 'DOV' },
  { StockName: 'Monolithic Power Systems Inc.', symbol: 'MPWR' },
  { StockName: 'MPWR', symbol: 'MPWR' },
  { StockName: 'Amcor PLC', symbol: 'AMCR' },
  { StockName: 'AMCR', symbol: 'AMCR' },
  { StockName: 'Waters Corporation', symbol: 'WAT' },
  { StockName: 'WAT', symbol: 'WAT' },
  { StockName: 'Teledyne Technologies Incorporated', symbol: 'TDY' },
  { StockName: 'TDY', symbol: 'TDY' },
  { StockName: 'Marathon Oil Corporation', symbol: 'MRO' },
  { StockName: 'MRO', symbol: 'MRO' },
  { StockName: 'Conagra Brands Inc.', symbol: 'CAG' },
  { StockName: 'CAG', symbol: 'CAG' },
  { StockName: 'AES Corporation', symbol: 'AES' },
  { StockName: 'AES', symbol: 'AES' },
  { StockName: 'VeriSign Inc.', symbol: 'VRSN' },
  { StockName: 'VRSN', symbol: 'VRSN' },
  { StockName: 'Xylem Inc.', symbol: 'XYL' },
  { StockName: 'XYL', symbol: 'XYL' },
  { StockName: 'Hewlett Packard Enterprise Co.', symbol: 'HPE' },
  { StockName: 'HPE', symbol: 'HPE' },
  { StockName: 'Essex Property Trust Inc.', symbol: 'ESS' },
  { StockName: 'ESS', symbol: 'ESS' },
  { StockName: 'Align Technology Inc.', symbol: 'ALGN' },
  { StockName: 'ALGN', symbol: 'ALGN' },
  { StockName: 'Hologic Inc.', symbol: 'HOLX' },
  { StockName: 'HOLX', symbol: 'HOLX' },
  { StockName: 'Atmos Energy Corporation', symbol: 'ATO' },
  { StockName: 'ATO', symbol: 'ATO' },
  { StockName: 'Skyworks Solutions Inc.', symbol: 'SWKS' },
  { StockName: 'SWKS', symbol: 'SWKS' },
  { StockName: 'Paycom Software Inc.', symbol: 'PAYC' },
  { StockName: 'PAYC', symbol: 'PAYC' },
  { StockName: 'Ball Corporation', symbol: 'BALL' },
  { StockName: 'BALL', symbol: 'BALL' },
  { StockName: 'PerkinElmer Inc.', symbol: 'PKI' },
  { StockName: 'PKI', symbol: 'PKI' },
  { StockName: 'Darden Restaurants Inc.', symbol: 'DRI' },
  { StockName: 'DRI', symbol: 'DRI' },
  { StockName: 'Westinghouse Air Brake Technologies Corporation', symbol: 'WAB' },
  { StockName: 'WAB', symbol: 'WAB' },
  { StockName: 'KeyCorp', symbol: 'KEY' },
  { StockName: 'KEY', symbol: 'KEY' },
  { StockName: 'J.M. Smucker Company', symbol: 'SJM' },
  { StockName: 'SJM', symbol: 'SJM' },
  { StockName: 'IDEX Corporation', symbol: 'IEX' },
  { StockName: 'IEX', symbol: 'IEX' },
  { StockName: 'Jacobs Solutions Inc.', symbol: 'J' },
  { StockName: 'J', symbol: 'J' },
  { StockName: 'SolarEdge Technologies Inc.', symbol: 'SEDG' },
  { StockName: 'SEDG', symbol: 'SEDG' },
  { StockName: 'Evergy Inc.', symbol: 'EVRG' },
  { StockName: 'EVRG', symbol: 'EVRG' },
  { StockName: 'Alliant Energy Corp', symbol: 'LNT' },
  { StockName: 'LNT', symbol: 'LNT' },
  { StockName: 'FactSet Research Systems Inc.', symbol: 'FDS' },
  { StockName: 'FDS', symbol: 'FDS' },
  { StockName: 'Cincinnati Financial Corporation', symbol: 'CINF' },
  { StockName: 'CINF', symbol: 'CINF' },
  { StockName: 'Quest Diagnostics Incorporated', symbol: 'DGX' },
  { StockName: 'DGX', symbol: 'DGX' },
  { StockName: 'Zebra Technologies Corporation Class A', symbol: 'ZBRA' },
  { StockName: 'ZBRA', symbol: 'ZBRA' },
  { StockName: 'Expeditors International of Washington Inc.', symbol: 'EXPD' },
  { StockName: 'EXPD', symbol: 'EXPD' },
  { StockName: 'Synchrony Financial', symbol: 'SYF' },
  { StockName: 'SYF', symbol: 'SYF' },
  { StockName: 'NetApp Inc.', symbol: 'NTAP' },
  { StockName: 'NTAP', symbol: 'NTAP' },
  { StockName: 'FLEETCOR Technologies Inc.', symbol: 'FLT' },
  { StockName: 'FLT', symbol: 'FLT' },
  { StockName: 'Trimble Inc.', symbol: 'TRMB' },
  { StockName: 'TRMB', symbol: 'TRMB' },
  { StockName: 'Catalent Inc', symbol: 'CTLT' },
  { StockName: 'CTLT', symbol: 'CTLT' },
  { StockName: 'Avery Dennison Corporation', symbol: 'AVY' },
  { StockName: 'AVY', symbol: 'AVY' },
  { StockName: 'Tyler Technologies Inc.', symbol: 'TYL' },
  { StockName: 'TYL', symbol: 'TYL' },
  { StockName: 'Best Buy Co. Inc.', symbol: 'BBY' },
  { StockName: 'BBY', symbol: 'BBY' },
  { StockName: 'Iron Mountain Inc.', symbol: 'IRM' },
  { StockName: 'IRM', symbol: 'IRM' },
  { StockName: 'Expedia Group Inc.', symbol: 'EXPE' },
  { StockName: 'EXPE', symbol: 'EXPE' },
  { StockName: 'Brown & Brown Inc.', symbol: 'BRO' },
  { StockName: 'BRO', symbol: 'BRO' },
  { StockName: 'Jack Henry & Associates Inc.', symbol: 'JKHY' },
  { StockName: 'JKHY', symbol: 'JKHY' },
  { StockName: 'Match Group Inc.', symbol: 'MTCH' },
  { StockName: 'MTCH', symbol: 'MTCH' },
  { StockName: 'J.B. Hunt Transport Services Inc.', symbol: 'JBHT' },
  { StockName: 'JBHT', symbol: 'JBHT' },
  { StockName: 'Hormel Foods Corporation', symbol: 'HRL' },
  { StockName: 'HRL', symbol: 'HRL' },
  { StockName: 'FMC Corporation', symbol: 'FMC' },
  { StockName: 'FMC', symbol: 'FMC' },
  { StockName: 'W. R. Berkley Corporation', symbol: 'WRB' },
  { StockName: 'WRB', symbol: 'WRB' },
  { StockName: 'Cooper Companies Inc.', symbol: 'COO' },
  { StockName: 'COO', symbol: 'COO' },
  { StockName: 'Omnicom Group Inc', symbol: 'OMC' },
  { StockName: 'OMC', symbol: 'OMC' },
  { StockName: 'Akamai Technologies Inc.', symbol: 'AKAM' },
  { StockName: 'AKAM', symbol: 'AKAM' },
  { StockName: 'Healthpeak Properties Inc.', symbol: 'PEAK' },
  { StockName: 'PEAK', symbol: 'PEAK' },
  { StockName: 'Camden Property Trust', symbol: 'CPT' },
  { StockName: 'CPT', symbol: 'CPT' },
  { StockName: 'Textron Inc.', symbol: 'TXT' },
  { StockName: 'TXT', symbol: 'TXT' },
  { StockName: 'Teradyne Inc.', symbol: 'TER' },
  { StockName: 'TER', symbol: 'TER' },
  { StockName: 'CarMax Inc.', symbol: 'KMX' },
  { StockName: 'KMX', symbol: 'KMX' },
  { StockName: 'Garmin Ltd.', symbol: 'GRMN' },
  { StockName: 'GRMN', symbol: 'GRMN' },
  { StockName: 'Citrix Systems Inc.', symbol: 'CTXS' },
  { StockName: 'CTXS', symbol: 'CTXS' },
  { StockName: 'Brown-Forman Corporation Class B', symbol: 'BF.B' },
  { StockName: 'BF.B', symbol: 'BF.B' },
  { StockName: 'Leidos Holdings Inc.', symbol: 'LDOS' },
  { StockName: 'LDOS', symbol: 'LDOS' },
  { StockName: 'Incyte Corporation', symbol: 'INCY' },
  { StockName: 'INCY', symbol: 'INCY' },
  { StockName: 'Pool Corporation', symbol: 'POOL' },
  { StockName: 'POOL', symbol: 'POOL' },
  { StockName: 'International Paper Company', symbol: 'IP' },
  { StockName: 'IP', symbol: 'IP' },
  { StockName: 'UDR Inc.', symbol: 'UDR' },
  { StockName: 'UDR', symbol: 'UDR' },
  { StockName: 'C.H. Robinson Worldwide Inc.', symbol: 'CHRW' },
  { StockName: 'CHRW', symbol: 'CHRW' },
  { StockName: 'Cboe Global Markets Inc', symbol: 'CBOE' },
  { StockName: 'CBOE', symbol: 'CBOE' },
  { StockName: 'Howmet Aerospace Inc.', symbol: 'HWM' },
  { StockName: 'HWM', symbol: 'HWM' },
  { StockName: 'LKQ Corporation', symbol: 'LKQ' },
  { StockName: 'LKQ', symbol: 'LKQ' },
  { StockName: 'NVR Inc.', symbol: 'NVR' },
  { StockName: 'NVR', symbol: 'NVR' },
  { StockName: 'Etsy Inc.', symbol: 'ETSY' },
  { StockName: 'ETSY', symbol: 'ETSY' },
  { StockName: 'NortonLifeLock Inc.', symbol: 'NLOK' },
  { StockName: 'NLOK', symbol: 'NLOK' },
  { StockName: 'Stanley Black & Decker Inc.', symbol: 'SWK' },
  { StockName: 'SWK', symbol: 'SWK' },
  { StockName: 'APA Corp.', symbol: 'APA' },
  { StockName: 'APA', symbol: 'APA' },
  { StockName: 'Kimco Realty Corporation', symbol: 'KIM' },
  { StockName: 'KIM', symbol: 'KIM' },
  { StockName: 'Seagate Technology Holdings PLC', symbol: 'STX' },
  { StockName: 'STX', symbol: 'STX' },
  {
    StockName: 'Domino\'s Pizza Inc.', symbol: 'DPZ'
  },
  { StockName: 'DPZ', symbol: 'DPZ' },
  { StockName: 'V.F. Corporation', symbol: 'VFC' },
  { StockName: 'VFC', symbol: 'VFC' },
  { StockName: 'Nordson Corporation', symbol: 'NDSN' },
  { StockName: 'NDSN', symbol: 'NDSN' },
  { StockName: 'Las Vegas Sands Corp.', symbol: 'LVS' },
  { StockName: 'LVS', symbol: 'LVS' },
  { StockName: 'NiSource Inc', symbol: 'NI' },
  { StockName: 'NI', symbol: 'NI' },
  { StockName: 'PTC Inc.', symbol: 'PTC' },
  { StockName: 'PTC', symbol: 'PTC' },
  { StockName: 'Host Hotels & Resorts Inc.', symbol: 'HST' },
  { StockName: 'HST', symbol: 'HST' },
  { StockName: 'Snap-on Incorporated', symbol: 'SNA' },
  { StockName: 'SNA', symbol: 'SNA' },
  { StockName: 'Lamb Weston Holdings Inc.', symbol: 'LW' },
  { StockName: 'LW', symbol: 'LW' },
  { StockName: 'Bio-Techne Corporation', symbol: 'TECH' },
  { StockName: 'TECH', symbol: 'TECH' },
  { StockName: 'ABIOMED Inc.', symbol: 'ABMD' },
  { StockName: 'ABMD', symbol: 'ABMD' },
  { StockName: 'Live Nation Entertainment Inc.', symbol: 'LYV' },
  { StockName: 'LYV', symbol: 'LYV' },
  { StockName: 'United Airlines Holdings Inc.', symbol: 'UAL' },
  { StockName: 'UAL', symbol: 'UAL' },
  { StockName: 'Boston Properties Inc.', symbol: 'BXP' },
  { StockName: 'BXP', symbol: 'BXP' },
  { StockName: 'Packaging Corporation of America', symbol: 'PKG' },
  { StockName: 'PKG', symbol: 'PKG' },
  { StockName: 'Viatris Inc.', symbol: 'VTRS' },
  { StockName: 'VTRS', symbol: 'VTRS' },
  { StockName: 'Generac Holdings Inc.', symbol: 'GNRC' },
  { StockName: 'GNRC', symbol: 'GNRC' },
  { StockName: 'Paramount Global Class B', symbol: 'PARA' },
  { StockName: 'PARA', symbol: 'PARA' },
  { StockName: 'Western Digital Corporation', symbol: 'WDC' },
  { StockName: 'WDC', symbol: 'WDC' },
  { StockName: 'Masco Corporation', symbol: 'MAS' },
  { StockName: 'MAS', symbol: 'MAS' },
  { StockName: 'Royal Caribbean Group', symbol: 'RCL' },
  { StockName: 'RCL', symbol: 'RCL' },
  { StockName: 'Interpublic Group of Companies Inc.', symbol: 'IPG' },
  { StockName: 'IPG', symbol: 'IPG' },
  { StockName: 'Fox Corporation Class A', symbol: 'FOXA' },
  { StockName: 'FOXA', symbol: 'FOXA' },
  { StockName: 'Advance Auto Parts Inc.', symbol: 'AAP' },
  { StockName: 'AAP', symbol: 'AAP' },
  { StockName: 'Everest Re Group Ltd.', symbol: 'RE' },
  { StockName: 'RE', symbol: 'RE' },
  { StockName: 'NRG Energy Inc.', symbol: 'NRG' },
  { StockName: 'NRG', symbol: 'NRG' },
  { StockName: 'Loews Corporation', symbol: 'L' },
  { StockName: 'L', symbol: 'L' },
  { StockName: 'Comerica Incorporated', symbol: 'CMA' },
  { StockName: 'CMA', symbol: 'CMA' },
  { StockName: 'MGM Resorts International', symbol: 'MGM' },
  { StockName: 'MGM', symbol: 'MGM' },
  { StockName: 'Signature Bank', symbol: 'SBNY' },
  { StockName: 'SBNY', symbol: 'SBNY' },
  { StockName: 'Campbell Soup Company', symbol: 'CPB' },
  { StockName: 'CPB', symbol: 'CPB' },
  { StockName: 'Nielsen Holdings Plc', symbol: 'NLSN' },
  { StockName: 'NLSN', symbol: 'NLSN' },
  { StockName: 'Teleflex Incorporated', symbol: 'TFX' },
  { StockName: 'TFX', symbol: 'TFX' },
  { StockName: 'Globe Life Inc.', symbol: 'GL' },
  { StockName: 'GL', symbol: 'GL' },
  { StockName: 'Henry Schein Inc.', symbol: 'HSIC' },
  { StockName: 'HSIC', symbol: 'HSIC' },
  { StockName: 'Carnival Corporation', symbol: 'CCL' },
  { StockName: 'CCL', symbol: 'CCL' },
  { StockName: 'Celanese Corporation', symbol: 'CE' },
  { StockName: 'CE', symbol: 'CE' },
  { StockName: 'Huntington Ingalls Industries Inc.', symbol: 'HII' },
  { StockName: 'HII', symbol: 'HII' },
  { StockName: 'Hasbro Inc.', symbol: 'HAS' },
  { StockName: 'HAS', symbol: 'HAS' },
  { StockName: 'Molson Coors Beverage Company Class B', symbol: 'TAP' },
  { StockName: 'TAP', symbol: 'TAP' },
  { StockName: 'PulteGroup Inc.', symbol: 'PHM' },
  { StockName: 'PHM', symbol: 'PHM' },
  { StockName: 'Charles River Laboratories International Inc.', symbol: 'CRL' },
  { StockName: 'CRL', symbol: 'CRL' },
  { StockName: 'Eastman Chemical Company', symbol: 'EMN' },
  { StockName: 'EMN', symbol: 'EMN' },
  { StockName: 'Bio-Rad Laboratories Inc. Class A', symbol: 'BIO' },
  { StockName: 'BIO', symbol: 'BIO' },
  { StockName: 'Qorvo Inc.', symbol: 'QRVO' },
  { StockName: 'QRVO', symbol: 'QRVO' },
  { StockName: 'F5 Inc.', symbol: 'FFIV' },
  { StockName: 'FFIV', symbol: 'FFIV' },
  { StockName: 'Bath & Body Works Inc.', symbol: 'BBWI' },
  { StockName: 'BBWI', symbol: 'BBWI' },
  { StockName: 'WestRock Company', symbol: 'WRK' },
  { StockName: 'WRK', symbol: 'WRK' },
  { StockName: 'MarketAxess Holdings Inc.', symbol: 'MKTX' },
  { StockName: 'MKTX', symbol: 'MKTX' },
  { StockName: 'Ceridian HCM Holding Inc.', symbol: 'CDAY' },
  { StockName: 'CDAY', symbol: 'CDAY' },
  { StockName: 'Juniper Networks Inc.', symbol: 'JNPR' },
  { StockName: 'JNPR', symbol: 'JNPR' },
  { StockName: 'Zions Bancorporation N.A.', symbol: 'ZION' },
  { StockName: 'ZION', symbol: 'ZION' },
  { StockName: 'BorgWarner Inc.', symbol: 'BWA' },
  { StockName: 'BWA', symbol: 'BWA' },
  { StockName: 'Regency Centers Corporation', symbol: 'REG' },
  { StockName: 'REG', symbol: 'REG' },
  { StockName: 'Pinnacle West Capital Corporation', symbol: 'PNW' },
  { StockName: 'PNW', symbol: 'PNW' },
  { StockName: 'American Airlines Group Inc.', symbol: 'AAL' },
  { StockName: 'AAL', symbol: 'AAL' },
  { StockName: 'Tapestry Inc.', symbol: 'TPR' },
  { StockName: 'TPR', symbol: 'TPR' },
  { StockName: 'Robert Half International Inc.', symbol: 'RHI' },
  { StockName: 'RHI', symbol: 'RHI' },
  { StockName: 'Allegion Public Limited Company', symbol: 'ALLE' },
  { StockName: 'ALLE', symbol: 'ALLE' },
  { StockName: 'Caesars Entertainment Inc', symbol: 'CZR' },
  { StockName: 'CZR', symbol: 'CZR' },
  { StockName: 'Assurant Inc.', symbol: 'AIZ' },
  { StockName: 'AIZ', symbol: 'AIZ' },
  { StockName: 'Whirlpool Corporation', symbol: 'WHR' },
  { StockName: 'WHR', symbol: 'WHR' },
  { StockName: 'Rollins Inc.', symbol: 'ROL' },
  { StockName: 'ROL', symbol: 'ROL' },
  { StockName: 'Lumen Technologies Inc.', symbol: 'LUMN' },
  { StockName: 'LUMN', symbol: 'LUMN' },
  { StockName: 'Lincoln National Corporation', symbol: 'LNC' },
  { StockName: 'LNC', symbol: 'LNC' },
  { StockName: 'Fortune Brands Home & Security Inc.', symbol: 'FBHS' },
  { StockName: 'FBHS', symbol: 'FBHS' },
  { StockName: 'Invesco Ltd.', symbol: 'IVZ' },
  { StockName: 'IVZ', symbol: 'IVZ' },
  { StockName: 'Sealed Air Corporation', symbol: 'SEE' },
  { StockName: 'SEE', symbol: 'SEE' },
  { StockName: 'Pentair plc', symbol: 'PNR' },
  { StockName: 'PNR', symbol: 'PNR' },
  { StockName: 'A. O. Smith Corporation', symbol: 'AOS' },
  { StockName: 'AOS', symbol: 'AOS' },
  { StockName: 'Organon & Co.', symbol: 'OGN' },
  { StockName: 'OGN', symbol: 'OGN' },
  { StockName: 'Franklin Resources Inc.', symbol: 'BEN' },
  { StockName: 'BEN', symbol: 'BEN' },
  { StockName: 'DENTSPLY SIRONA Inc.', symbol: 'XRAY' },
  { StockName: 'XRAY', symbol: 'XRAY' },
  { StockName: 'Wynn Resorts Limited', symbol: 'WYNN' },
  { StockName: 'WYNN', symbol: 'WYNN' },
  { StockName: 'Federal Realty Investment Trust', symbol: 'FRT' },
  { StockName: 'FRT', symbol: 'FRT' },
  { StockName: 'Universal Health Services Inc. Class B', symbol: 'UHS' },
  { StockName: 'UHS', symbol: 'UHS' },
  { StockName: 'News Corporation Class A', symbol: 'NWSA' },
  { StockName: 'NWSA', symbol: 'NWSA' },
  { StockName: 'DXC Technology Co.', symbol: 'DXC' },
  { StockName: 'DXC', symbol: 'DXC' },
  { StockName: 'Norwegian Cruise Line Holdings Ltd.', symbol: 'NCLH' },
  { StockName: 'NCLH', symbol: 'NCLH' },
  { StockName: 'Newell Brands Inc', symbol: 'NWL' },
  { StockName: 'NWL', symbol: 'NWL' },
  { StockName: 'Alaska Air Group Inc.', symbol: 'ALK' },
  { StockName: 'ALK', symbol: 'ALK' },
  { StockName: 'DaVita Inc.', symbol: 'DVA' },
  { StockName: 'DVA', symbol: 'DVA' },
  { StockName: 'Mohawk Industries Inc.', symbol: 'MHK' },
  { StockName: 'MHK', symbol: 'MHK' },
  { StockName: 'Fox Corporation Class B', symbol: 'FOX' },
  { StockName: 'FOX', symbol: 'FOX' },
  { StockName: 'Ralph Lauren Corporation Class A', symbol: 'RL' },
  { StockName: 'RL', symbol: 'RL' },
  { StockName: 'Vornado Realty Trust', symbol: 'VNO' },
  { StockName: 'VNO', symbol: 'VNO' },
  { StockName: 'DISH Network Corporation Class A', symbol: 'DISH' },
  { StockName: 'DISH', symbol: 'DISH' },
  { StockName: 'News Corporation Class B', symbol: 'NWS' },
  { StockName: 'NWS', symbol: 'NWS' },];

export const kanbanGrid = [
  {
    headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true
  },

  {
    headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true
  },

  {
    headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false
  },

  {
    headerText: 'Done',
    keyField: 'Close',
    allowToggle: true
  },
];
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'France',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Gold',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Silver',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Bronze',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const rangeColorMapping = [
  {
    label: '1°C to 10°C',
    start: '1',
    end: '10',
    colors: colorMappingData[1]
  },

  {
    label: '11°C to 20°C',
    start: '11',
    end: '20',
    colors: colorMappingData[2]
  },

  {
    label: '21°C to 30°C',
    start: '21',
    end: '30',
    colors: colorMappingData[3]
  },

];

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}°C',
  title: 'Temperature',
};

export const FinancialPrimaryXAxis = {
  valueType: 'DateTime',
  minimum: new Date('2016, 12, 31'),
  maximum: new Date('2017, 9, 30'),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: 'Price',
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center'
  },
  {
    field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus
  },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center'
  },
  {
    field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center'
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center'
  },

  {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const employeesGrid = [
  {
    headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center'
  },
  {
    field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  {
    field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  {
    headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry
  },

  {
    field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center'
  },

  {
    field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center'
  },
  {
    field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center'
  },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'History',
        icon: <FiShoppingBag />,
      },
      {
        name: 'Forecast',
        icon: <FiShoppingBag />,
      },
      {
        name: 'CustomPortfolio',
        icon: <FiShoppingBag />,
      },
      {
        name: 'News',
        icon: <FiShoppingBag />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'Calendar',
        icon: <FiShoppingBag />,
      },
      {
        name: 'Todo',
        icon: <FiShoppingBag />,
      },
      {
        name: 'Community',
        icon: <FiShoppingBag />,
      }
    ]
  },
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: '+$350',
    title: 'Paypal Transfer',
    desc: 'Money Added',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsShield />,
    amount: '-$560',
    desc: 'Bill Payment',
    title: 'Wallet',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <FiCreditCard />,
    amount: '+$350',
    title: 'Credit Card',
    desc: 'Money reversed',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <TiTick />,
    amount: '+$350',
    title: 'Bank Transfer',
    desc: 'Money Added',

    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: <BsCurrencyDollar />,
    amount: '-$50',
    percentage: '+38%',
    title: 'Refund',
    desc: 'Payment Sent',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: '-$560',
    title: 'Top Sales',
    desc: 'Johnathan Doe',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <FiStar />,
    amount: '-$560',
    title: 'Best Seller',
    desc: 'MaterialPro Admin',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <BsChatLeft />,
    amount: '+$560',
    title: 'Most Commented',
    desc: 'Ample Admin',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];

export const medicalproBranding = {
  data: [
    {
      title: 'Due Date',
      desc: 'Oct 23, 2021',
    },
    {
      title: 'Budget',
      desc: '$98,500',
    },
    {
      title: 'Expense',
      desc: '$63,000',
    },
  ],
  teams: [
    {
      name: 'Bootstrap',
      color: 'orange',
    },
    {
      name: 'Angular',
      color: '#FB9678',
    },
  ],
  leaders: [
    {
      image:
        avatar2,
    },
    {
      image:
        avatar3,
    },
    {
      image:
        avatar2,
    },
    {
      image:
        avatar4,
    },
    {
      image:
        avatar,
    },
  ],
};

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    link: 'Account',
  },
  {
    icon: <BsShield />,
    title: 'My Calendar',
    desc: 'The Days and Weeks information',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    link: 'Calendar',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    link: 'Todo',
  },
];

export const ordersGrid = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderItems',
    headerText: 'Item',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Center',
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1002,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1003,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1004,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1005,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1006,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1007,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1008,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1009,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1010,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1011,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1012,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1013,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1014,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1015,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1016,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1017,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1018,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1019,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1020,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1021,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1022,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1023,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1024,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1025,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1026,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1027,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1028,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1029,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1030,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1031,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1032,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1033,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1034,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1035,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1036,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1037,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1038,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1039,
    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1040,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },

];

export const recommendStock = [
  {
    Id: 1,
    title: 'Bitcoin',
    desc: 'BTC-USD',
    recommendWeight: '1.2',
  },
  {
    Id: 2,
    title: 'Litecoin',
    desc: 'LTC-USD',
    recommendWeight: '1.2',
  },
  {
    Id: 3,
    title: 'Ethereum',
    desc: 'ETH-USD',
    recommendWeight: '1.2',
  },
  {
    Id: 4,
    title: 'Solana',
    desc: 'SOL-USD',
    recommendWeight: '1.2',
  },
  {
    Id: 5,
    title: '1Bitcoin',
    desc: '1BTC-USD',
    recommendWeight: '1.2',
  },
  {
    Id: 6,
    title: '1Litecoin',
    desc: '1LTC-USD',
    recommendWeight: '1.2',
  },
  {
    Id: 7,
    title: '1Ethereum',
    desc: '1ETH-USD',
    recommendWeight: '0.8',
  },
  {
    Id: 8,
    title: '1Solana',
    desc: '1SOL-USD',
    recommendWeight: '0.8',
  },
  {
    Id: 9,
    title: '3Solana',
    desc: '3SOL-USD',
    recommendWeight: '0.8',
  },
  {
    Id: 10,
    title: '2Solana',
    desc: '2SOL-USD',
    recommendWeight: '0.4',
  },
  //'BTC-USD', 'LTC-USD', 'ETH-USD','SOL-USD'
]

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: '1',
    Time: 'Today',
  },
  {
    Id: '2',
    Time: 'Last Week',
  }, {
    Id: '3',
    Time: 'Last Month',
  },
];
export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },

];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line'
  },

  {
    dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'England',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line'
  },

  {
    dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'India',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line'
  },

];

export const pieChartData = [
  { x: 'Labour', y: 18, text: '18%' },
  { x: 'Legal', y: 8, text: '8%' },
  { x: 'Production', y: 15, text: '15%' },
  { x: 'License', y: 11, text: '11%' },
  { x: 'Facilities', y: 18, text: '18%' },
  { x: 'Taxes', y: 14, text: '14%' },
  { x: 'Insurance', y: 16, text: '16%' },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const ecomPieChartData = [
  { x: 'META', y: 35, text: '35%' },
  { x: 'AAPL', y: 15, text: '15%' },
  { x: 'AMZN', y: 15, text: '15%' },
  { x: 'NFLX', y: 20, text: '20%' },
  { x: 'GOOGL', y: 15, text: '15%' },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [

  {
    dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'blue',

  },

  {
    dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const financialChartData = [
  {
    x: new Date('2012-04-02'),
    open: 85.9757,
    high: 90.6657,
    low: 85.7685,
    close: 90.5257,
    volume: 660187068,
  },
  {
    x: new Date('2012-04-09'),
    open: 89.4471,
    high: 92,
    low: 86.2157,
    close: 86.4614,
    volume: 912634864,
  },
  {
    x: new Date('2012-04-16'),
    open: 87.1514,
    high: 88.6071,
    low: 81.4885,
    close: 81.8543,
    volume: 1221746066,
  },
  {
    x: new Date('2012-04-23'),
    open: 81.5157,
    high: 88.2857,
    low: 79.2857,
    close: 86.1428,
    volume: 965935749,
  },
  {
    x: new Date('2012-04-30'),
    open: 85.4,
    high: 85.4857,
    low: 80.7385,
    close: 80.75,
    volume: 615249365,
  },
  {
    x: new Date('2012-05-07'),
    open: 80.2143,
    high: 82.2685,
    low: 79.8185,
    close: 80.9585,
    volume: 541742692,
  },
  {
    x: new Date('2012-05-14'),
    open: 80.3671,
    high: 81.0728,
    low: 74.5971,
    close: 75.7685,
    volume: 708126233,
  },
  {
    x: new Date('2012-05-21'),
    open: 76.3571,
    high: 82.3571,
    low: 76.2928,
    close: 80.3271,
    volume: 682076215,
  },
  {
    x: new Date('2012-05-28'),
    open: 81.5571,
    high: 83.0714,
    low: 80.0743,
    close: 80.1414,
    volume: 480059584,
  },
  {
    x: new Date('2012-06-04'),
    open: 80.2143,
    high: 82.9405,
    low: 78.3571,
    close: 82.9028,
    volume: 517577005,
  },
  {
    x: new Date('2012-06-11'),
    open: 83.96,
    high: 84.0714,
    low: 80.9571,
    close: 82.0185,
    volume: 499693120,
  },
  {
    x: new Date('2012-06-18'),
    open: 81.5657,
    high: 84.2857,
    low: 81.4814,
    close: 83.1571,
    volume: 442172142,
  },
  {
    x: new Date('2012-06-25'),
    open: 82.4714,
    high: 83.4285,
    low: 80.8014,
    close: 83.4285,
    volume: 371529102,
  },
  {
    x: new Date('2012-07-02'),
    open: 83.5328,
    high: 87.7628,
    low: 83.3714,
    close: 86.5543,
    volume: 385906790,
  },
  {
    x: new Date('2012-07-09'),
    open: 86.4714,
    high: 88.5528,
    low: 84.6685,
    close: 86.4243,
    volume: 524235196,
  },
  {
    x: new Date('2012-07-16'),
    open: 86.4457,
    high: 87.9071,
    low: 86.1643,
    close: 86.3285,
    volume: 419537217,
  },
  {
    x: new Date('2012-07-23'),
    open: 84.9143,
    high: 87.0971,
    low: 81.4285,
    close: 83.5943,
    volume: 680773023,
  },
  {
    x: new Date('2012-07-30'),
    open: 84.4171,
    high: 88.2828,
    low: 83.9743,
    close: 87.9571,
    volume: 475109323,
  },
  {
    x: new Date('2012-08-06'),
    open: 88.1843,
    high: 89.2857,
    low: 87.8943,
    close: 88.8143,
    volume: 312826308,
  },
  {
    x: new Date('2012-08-13'),
    open: 89.0557,
    high: 92.5985,
    low: 89.0357,
    close: 92.5871,
    volume: 392867193,
  },
  {
    x: new Date('2012-08-20'),
    open: 92.8585,
    high: 96.4114,
    low: 92.5871,
    close: 94.746,
    volume: 708614692,
  },
  {
    x: new Date('2012-08-27'),
    open: 97.1414,
    high: 97.2671,
    low: 93.8928,
    close: 95.0343,
    volume: 383807217,
  },
  {
    x: new Date('2012-09-03'),
    open: 95.1085,
    high: 97.4971,
    low: 94.9285,
    close: 97.2057,
    volume: 355722047,
  },
  {
    x: new Date('2012-09-10'),
    open: 97.2071,
    high: 99.5685,
    low: 93.7143,
    close: 98.7543,
    volume: 724042207,
  },
  {
    x: new Date('2012-09-17'),
    open: 99.9071,
    high: 100.7243,
    low: 99.0885,
    close: 100.0135,
    volume: 500166040,
  },
  {
    x: new Date('2012-09-24'),
    open: 98.1228,
    high: 99.3028,
    low: 94.3357,
    close: 95.3007,
    volume: 714507994,
  },
  {
    x: new Date('2012-10-01'),
    open: 95.88,
    high: 96.6785,
    low: 92.95,
    close: 93.2271,
    volume: 638543622,
  },
  {
    x: new Date('2012-10-08'),
    open: 92.4114,
    high: 92.5085,
    low: 89.0785,
    close: 89.9591,
    volume: 747127724,
  },
  {
    x: new Date('2012-10-15'),
    open: 90.3357,
    high: 93.2557,
    low: 87.0885,
    close: 87.12,
    volume: 646996264,
  },
  {
    x: new Date('2012-10-22'),
    open: 87.4885,
    high: 90.7685,
    low: 84.4285,
    close: 86.2857,
    volume: 866040680,
  },
  {
    x: new Date('2012-10-29'),
    open: 84.9828,
    high: 86.1428,
    low: 82.1071,
    close: 82.4,
    volume: 367371310,
  },
  {
    x: new Date('2012-11-05'),
    open: 83.3593,
    high: 84.3914,
    low: 76.2457,
    close: 78.1514,
    volume: 919719846,
  },
  {
    x: new Date('2012-11-12'),
    open: 79.1643,
    high: 79.2143,
    low: 72.25,
    close: 75.3825,
    volume: 894382149,
  },
  {
    x: new Date('2012-11-19'),
    open: 77.2443,
    high: 81.7143,
    low: 77.1257,
    close: 81.6428,
    volume: 527416747,
  },
  {
    x: new Date('2012-11-26'),
    open: 82.2714,
    high: 84.8928,
    low: 81.7514,
    close: 83.6114,
    volume: 646467974,
  },
  {
    x: new Date('2012-12-03'),
    open: 84.8071,
    high: 84.9414,
    low: 74.09,
    close: 76.1785,
    volume: 980096264,
  },
  {
    x: new Date('2012-12-10'),
    open: 75,
    high: 78.5085,
    low: 72.2257,
    close: 72.8277,
    volume: 835016110,
  },
  {
    x: new Date('2012-12-17'),
    open: 72.7043,
    high: 76.4143,
    low: 71.6043,
    close: 74.19,
    volume: 726150329,
  },
  {
    x: new Date('2012-12-24'),
    open: 74.3357,
    high: 74.8928,
    low: 72.0943,
    close: 72.7984,
    volume: 321104733,
  },
  {
    x: new Date('2012-12-31'),
    open: 72.9328,
    high: 79.2857,
    low: 72.7143,
    close: 75.2857,
    volume: 540854882,
  },
  {
    x: new Date('2013-01-07'),
    open: 74.5714,
    high: 75.9843,
    low: 73.6,
    close: 74.3285,
    volume: 574594262,
  },
  {
    x: new Date('2013-01-14'),
    open: 71.8114,
    high: 72.9643,
    low: 69.0543,
    close: 71.4285,
    volume: 803105621,
  },
  {
    x: new Date('2013-01-21'),
    open: 72.08,
    high: 73.57,
    low: 62.1428,
    close: 62.84,
    volume: 971912560,
  },
  {
    x: new Date('2013-01-28'),
    open: 62.5464,
    high: 66.0857,
    low: 62.2657,
    close: 64.8028,
    volume: 656549587,
  },
  {
    x: new Date('2013-02-04'),
    open: 64.8443,
    high: 68.4014,
    low: 63.1428,
    close: 67.8543,
    volume: 743778993,
  },
  {
    x: new Date('2013-02-11'),
    open: 68.0714,
    high: 69.2771,
    low: 65.7028,
    close: 65.7371,
    volume: 585292366,
  },
  {
    x: new Date('2013-02-18'),
    open: 65.8714,
    high: 66.1043,
    low: 63.26,
    close: 64.4014,
    volume: 421766997,
  },
  {
    x: new Date('2013-02-25'),
    open: 64.8357,
    high: 65.0171,
    low: 61.4257,
    close: 61.4957,
    volume: 582741215,
  },
  {
    x: new Date('2013-03-04'),
    open: 61.1143,
    high: 62.2043,
    low: 59.8571,
    close: 61.6743,
    volume: 632856539,
  },
  {
    x: new Date('2013-03-11'),
    open: 61.3928,
    high: 63.4614,
    low: 60.7343,
    close: 63.38,
    volume: 572066981,
  },
  {
    x: new Date('2013-03-18'),
    open: 63.0643,
    high: 66.0143,
    low: 63.0286,
    close: 65.9871,
    volume: 552156035,
  },
  {
    x: new Date('2013-03-25'),
    open: 66.3843,
    high: 67.1357,
    low: 63.0886,
    close: 63.2371,
    volume: 390762517,
  },
  {
    x: new Date('2013-04-01'),
    open: 63.1286,
    high: 63.3854,
    low: 59.9543,
    close: 60.4571,
    volume: 505273732,
  },
  {
    x: new Date('2013-04-08'),
    open: 60.6928,
    high: 62.57,
    low: 60.3557,
    close: 61.4,
    volume: 387323550,
  },
  {
    x: new Date('2013-04-15'),
    open: 61,
    high: 61.1271,
    low: 55.0143,
    close: 55.79,
    volume: 709945604,
  },
  {
    x: new Date('2013-04-22'),
    open: 56.0914,
    high: 59.8241,
    low: 55.8964,
    close: 59.6007,
    volume: 787007506,
  },
  {
    x: new Date('2013-04-29'),
    open: 60.0643,
    high: 64.7471,
    low: 60,
    close: 64.2828,
    volume: 655020017,
  },
  {
    x: new Date('2013-05-06'),
    open: 65.1014,
    high: 66.5357,
    low: 64.3543,
    close: 64.71,
    volume: 545488533,
  },
  {
    x: new Date('2013-05-13'),
    open: 64.5014,
    high: 65.4143,
    low: 59.8428,
    close: 61.8943,
    volume: 633706550,
  },
  {
    x: new Date('2013-05-20'),
    open: 61.7014,
    high: 64.05,
    low: 61.4428,
    close: 63.5928,
    volume: 494379068,
  },
  {
    x: new Date('2013-05-27'),
    open: 64.2714,
    high: 65.3,
    low: 62.7714,
    close: 64.2478,
    volume: 362907830,
  },
  {
    x: new Date('2013-06-03'),
    open: 64.39,
    high: 64.9186,
    low: 61.8243,
    close: 63.1158,
    volume: 443249793,
  },
  {
    x: new Date('2013-06-10'),
    open: 63.5328,
    high: 64.1541,
    low: 61.2143,
    close: 61.4357,
    volume: 389680092,
  },
  {
    x: new Date('2013-06-17'),
    open: 61.6343,
    high: 62.2428,
    low: 58.3,
    close: 59.0714,
    volume: 400384818,
  },
  {
    x: new Date('2013-06-24'),
    open: 58.2,
    high: 58.38,
    low: 55.5528,
    close: 56.6471,
    volume: 519314826,
  },
  {
    x: new Date('2013-07-01'),
    open: 57.5271,
    high: 60.47,
    low: 57.3171,
    close: 59.6314,
    volume: 343878841,
  },
  {
    x: new Date('2013-07-08'),
    open: 60.0157,
    high: 61.3986,
    low: 58.6257,
    close: 60.93,
    volume: 384106977,
  },
  {
    x: new Date('2013-07-15'),
    open: 60.7157,
    high: 62.1243,
    low: 60.5957,
    close: 60.7071,
    volume: 286035513,
  },
  {
    x: new Date('2013-07-22'),
    open: 61.3514,
    high: 63.5128,
    low: 59.8157,
    close: 62.9986,
    volume: 395816827,
  },
  {
    x: new Date('2013-07-29'),
    open: 62.9714,
    high: 66.1214,
    low: 62.8857,
    close: 66.0771,
    volume: 339668858,
  },
  {
    x: new Date('2013-08-05'),
    open: 66.3843,
    high: 67.4128,
    low: 64.8071,
    close: 64.9214,
    volume: 368486781,
  },
  {
    x: new Date('2013-08-12'),
    open: 65.2657,
    high: 72.0357,
    low: 65.2328,
    close: 71.7614,
    volume: 711563584,
  },
  {
    x: new Date('2013-08-19'),
    open: 72.0485,
    high: 73.3914,
    low: 71.1714,
    close: 71.5743,
    volume: 417119660,
  },
  {
    x: new Date('2013-08-26'),
    open: 71.5357,
    high: 72.8857,
    low: 69.4286,
    close: 69.6023,
    volume: 392805888,
  },
  {
    x: new Date('2013-09-02'),
    open: 70.4428,
    high: 71.7485,
    low: 69.6214,
    close: 71.1743,
    volume: 317244380,
  },
  {
    x: new Date('2013-09-09'),
    open: 72.1428,
    high: 72.56,
    low: 66.3857,
    close: 66.4143,
    volume: 669376320,
  },
  {
    x: new Date('2013-09-16'),
    open: 65.8571,
    high: 68.3643,
    low: 63.8886,
    close: 66.7728,
    volume: 625142677,
  },
  {
    x: new Date('2013-09-23'),
    open: 70.8714,
    high: 70.9871,
    low: 68.6743,
    close: 68.9643,
    volume: 475274537,
  },
  {
    x: new Date('2013-09-30'),
    open: 68.1786,
    high: 70.3357,
    low: 67.773,
    close: 69.0043,
    volume: 368198906,
  },
  {
    x: new Date('2013-10-07'),
    open: 69.5086,
    high: 70.5486,
    low: 68.3257,
    close: 70.4017,
    volume: 361437661,
  },
  {
    x: new Date('2013-10-14'),
    open: 69.9757,
    high: 72.7514,
    low: 69.9071,
    close: 72.6985,
    volume: 342694379,
  },
  {
    x: new Date('2013-10-21'),
    open: 73.11,
    high: 76.1757,
    low: 72.5757,
    close: 75.1368,
    volume: 490458997,
  },
  {
    x: new Date('2013-10-28'),
    open: 75.5771,
    high: 77.0357,
    low: 73.5057,
    close: 74.29,
    volume: 508130174,
  },
  {
    x: new Date('2013-11-04'),
    open: 74.4428,
    high: 75.555,
    low: 73.1971,
    close: 74.3657,
    volume: 318132218,
  },
  {
    x: new Date('2013-11-11'),
    open: 74.2843,
    high: 75.6114,
    low: 73.4871,
    close: 74.9987,
    volume: 306711021,
  },
  {
    x: new Date('2013-11-18'),
    open: 74.9985,
    high: 75.3128,
    low: 73.3814,
    close: 74.2571,
    volume: 282778778,
  },
  {
    x: new Date('2013-11-25'),
    open: 74.4314,
    high: 79.7614,
    low: 74.4285,
    close: 79.4385,
    volume: 327405302,
  },
  {
    x: new Date('2013-12-02'),
    open: 79.7143,
    high: 82.1622,
    low: 78.6885,
    close: 80.0028,
    volume: 522055676,
  },
  {
    x: new Date('2013-12-09'),
    open: 80.1286,
    high: 81.5671,
    low: 79.0957,
    close: 79.2043,
    volume: 387271099,
  },
  {
    x: new Date('2013-12-16'),
    open: 79.2885,
    high: 80.377,
    low: 76.9714,
    close: 78.4314,
    volume: 457580848,
  },
  {
    x: new Date('2013-12-23'),
    open: 81.1428,
    high: 81.6971,
    low: 79.9285,
    close: 80.0128,
    volume: 274253503,
  },
  {
    x: new Date('2013-12-30'),
    open: 79.6371,
    high: 80.1828,
    low: 77.2043,
    close: 77.2828,
    volume: 275734934,
  },
  {
    x: new Date('2014-01-06'),
    open: 76.7785,
    high: 78.1228,
    low: 75.8728,
    close: 76.1343,
    volume: 393462075,
  },
  {
    x: new Date('2014-01-13'),
    open: 75.7014,
    high: 80.0285,
    low: 75.6971,
    close: 77.2385,
    volume: 439557459,
  },
  {
    x: new Date('2014-01-20'),
    open: 77.2843,
    high: 79.6128,
    low: 77.2028,
    close: 78.01,
    volume: 385585525,
  },
  {
    x: new Date('2014-01-27'),
    open: 78.5814,
    high: 79.2571,
    low: 70.5071,
    close: 71.5143,
    volume: 813702575,
  },
  {
    x: new Date('2014-02-03'),
    open: 71.8014,
    high: 74.7042,
    low: 71.3286,
    close: 74.24,
    volume: 434447570,
  },
  {
    x: new Date('2014-02-10'),
    open: 74.0943,
    high: 77.9971,
    low: 74,
    close: 77.7128,
    volume: 379011880,
  },
  {
    x: new Date('2014-02-17'),
    open: 78,
    high: 78.7414,
    low: 74.9428,
    close: 75.0357,
    volume: 289609443,
  },
  {
    x: new Date('2014-02-24'),
    open: 74.7357,
    high: 76.1071,
    low: 73.6571,
    close: 75.1771,
    volume: 367569649,
  },
  {
    x: new Date('2014-03-03'),
    open: 74.7743,
    high: 76.3928,
    low: 74.6871,
    close: 75.7771,
    volume: 275972640,
  },
  {
    x: new Date('2014-03-10'),
    open: 75.48,
    high: 77.0943,
    low: 74.7143,
    close: 74.9557,
    volume: 287729528,
  },
  {
    x: new Date('2014-03-17'),
    open: 75.3857,
    high: 76.6057,
    low: 75.0286,
    close: 76.1243,
    volume: 303531061,
  },
  {
    x: new Date('2014-03-24'),
    open: 76.9171,
    high: 78.4285,
    low: 76.3214,
    close: 76.6943,
    volume: 338387221,
  },
  {
    x: new Date('2014-03-31'),
    open: 77.0328,
    high: 77.64,
    low: 75.7971,
    close: 75.9743,
    volume: 245749459,
  },
  {
    x: new Date('2014-04-07'),
    open: 75.4314,
    high: 76.0343,
    low: 73.8771,
    close: 74.23,
    volume: 312008139,
  },
  {
    x: new Date('2014-04-14'),
    open: 74.5571,
    high: 75.3943,
    low: 73.0471,
    close: 74.9914,
    volume: 241209047,
  },
  {
    x: new Date('2014-04-21'),
    open: 75.0485,
    high: 81.7128,
    low: 74.8514,
    close: 81.7057,
    volume: 476651465,
  },
  {
    x: new Date('2014-04-28'),
    open: 81.8285,
    high: 85.6328,
    low: 81.7928,
    close: 84.6543,
    volume: 473712709,
  },
  {
    x: new Date('2014-05-05'),
    open: 84.3057,
    high: 86.3442,
    low: 82.9043,
    close: 83.6489,
    volume: 365535013,
  },
  {
    x: new Date('2014-05-12'),
    open: 83.9271,
    high: 85.3614,
    low: 83.6285,
    close: 85.3585,
    volume: 260931637,
  },
  {
    x: new Date('2014-05-19'),
    open: 85.4071,
    high: 87.8184,
    low: 85.3328,
    close: 87.7328,
    volume: 294298274,
  },
  {
    x: new Date('2014-05-26'),
    open: 87.9828,
    high: 92.0243,
    low: 87.9471,
    close: 90.4285,
    volume: 400232120,
  },
  {
    x: new Date('2014-06-02'),
    open: 90.5657,
    high: 93.0371,
    low: 88.9285,
    close: 92.2243,
    volume: 412158024,
  },
  {
    x: new Date('2014-06-09'),
    open: 92.7,
    high: 95.05,
    low: 90.88,
    close: 91.28,
    volume: 292422550,
  },
  {
    x: new Date('2014-06-16'),
    open: 91.51,
    high: 92.75,
    low: 90.9,
    close: 90.91,
    volume: 234325480,
  },
  {
    x: new Date('2014-06-23'),
    open: 91.32,
    high: 92,
    low: 89.65,
    close: 91.98,
    volume: 213712160,
  },
  {
    x: new Date('2014-06-30'),
    open: 92.1,
    high: 94.1,
    low: 92.09,
    close: 94.03,
    volume: 138936570,
  },
  {
    x: new Date('2014-07-07'),
    open: 94.14,
    high: 96.8,
    low: 93.52,
    close: 95.22,
    volume: 229782440,
  },
  {
    x: new Date('2014-07-14'),
    open: 95.86,
    high: 97.1,
    low: 92.57,
    close: 94.43,
    volume: 248104390,
  },
  {
    x: new Date('2014-07-21'),
    open: 94.99,
    high: 97.88,
    low: 93.72,
    close: 97.671,
    volume: 273021350,
  },
  {
    x: new Date('2014-07-28'),
    open: 97.82,
    high: 99.44,
    low: 94.81,
    close: 96.13,
    volume: 235868530,
  },
  {
    x: new Date('2014-08-04'),
    open: 96.37,
    high: 96.58,
    low: 93.28,
    close: 94.74,
    volume: 222522120,
  },
  {
    x: new Date('2014-08-11'),
    open: 95.27,
    high: 98.19,
    low: 94.8355,
    close: 97.98,
    volume: 178806580,
  },
  {
    x: new Date('2014-08-18'),
    open: 98.49,
    high: 101.47,
    low: 97.98,
    close: 101.32,
    volume: 246446280,
  },
  {
    x: new Date('2014-08-25'),
    open: 101.79,
    high: 102.9,
    low: 100.7,
    close: 102.5,
    volume: 232858250,
  },
  {
    x: new Date('2014-09-01'),
    open: 103.06,
    high: 103.74,
    low: 97.79,
    close: 98.97,
    volume: 322045910,
  },
  {
    x: new Date('2014-09-08'),
    open: 99.3,
    high: 103.08,
    low: 96.14,
    close: 101.66,
    volume: 460851840,
  },
  {
    x: new Date('2014-09-15'),
    open: 102.81,
    high: 103.05,
    low: 98.89,
    close: 100.96,
    volume: 296425730,
  },
  {
    x: new Date('2014-09-22'),
    open: 101.8,
    high: 102.94,
    low: 97.72,
    close: 100.75,
    volume: 337617850,
  },
  {
    x: new Date('2014-09-29'),
    open: 98.65,
    high: 101.54,
    low: 98.04,
    close: 99.62,
    volume: 246900230,
  },
  {
    x: new Date('2014-10-06'),
    open: 99.95,
    high: 102.38,
    low: 98.31,
    close: 100.73,
    volume: 279646740,
  },
  {
    x: new Date('2014-10-13'),
    open: 101.33,
    high: 101.78,
    low: 95.18,
    close: 97.67,
    volume: 356408760,
  },
  {
    x: new Date('2014-10-20'),
    open: 98.315,
    high: 105.49,
    low: 98.22,
    close: 105.22,
    volume: 355329760,
  },
  {
    x: new Date('2014-10-27'),
    open: 104.85,
    high: 108.04,
    low: 104.7,
    close: 108,
    volume: 219443560,
  },
  {
    x: new Date('2014-11-03'),
    open: 108.22,
    high: 110.3,
    low: 107.72,
    close: 109.01,
    volume: 199332700,
  },
  {
    x: new Date('2014-11-10'),
    open: 109.02,
    high: 114.19,
    low: 108.4,
    close: 114.18,
    volume: 203976340,
  },
  {
    x: new Date('2014-11-17'),
    open: 114.27,
    high: 117.57,
    low: 113.3,
    close: 116.47,
    volume: 232574480,
  },
  {
    x: new Date('2014-11-24'),
    open: 116.85,
    high: 119.75,
    low: 116.62,
    close: 118.93,
    volume: 181158620,
  },
  {
    x: new Date('2014-12-01'),
    open: 118.81,
    high: 119.25,
    low: 111.27,
    close: 115,
    volume: 266118290,
  },
  {
    x: new Date('2014-12-08'),
    open: 114.1,
    high: 114.85,
    low: 109.35,
    close: 109.73,
    volume: 259311140,
  },
  {
    x: new Date('2014-12-15'),
    open: 110.7,
    high: 113.24,
    low: 106.26,
    close: 111.78,
    volume: 326382400,
  },
  {
    x: new Date('2014-12-22'),
    open: 112.16,
    high: 114.52,
    low: 111.97,
    close: 113.99,
    volume: 119248900,
  },
  {
    x: new Date('2014-12-29'),
    open: 113.79,
    high: 114.77,
    low: 107.35,
    close: 109.33,
    volume: 151780640,
  },
  {
    x: new Date('2015-01-05'),
    open: 108.29,
    high: 113.25,
    low: 104.63,
    close: 112.01,
    volume: 282690970,
  },
  {
    x: new Date('2015-01-12'),
    open: 112.6,
    high: 112.8,
    low: 105.2,
    close: 105.99,
    volume: 303531140,
  },
  {
    x: new Date('2015-01-19'),
    open: 107.84,
    high: 113.75,
    low: 106.5,
    close: 112.98,
    volume: 198362640,
  },
  {
    x: new Date('2015-01-26'),
    open: 113.74,
    high: 120,
    low: 109.03,
    close: 117.16,
    volume: 461747290,
  },
  {
    x: new Date('2015-02-02'),
    open: 118.05,
    high: 120.51,
    low: 116.08,
    close: 118.93,
    volume: 270190470,
  },
  {
    x: new Date('2015-02-09'),
    open: 118.55,
    high: 127.48,
    low: 118.43,
    close: 127.08,
    volume: 301354470,
  },
  {
    x: new Date('2015-02-16'),
    open: 127.49,
    high: 129.5,
    low: 126.92,
    close: 129.495,
    volume: 193883960,
  },
  {
    x: new Date('2015-02-23'),
    open: 130.02,
    high: 133.6,
    low: 126.61,
    close: 128.46,
    volume: 369856960,
  },
  {
    x: new Date('2015-03-02'),
    open: 129.25,
    high: 130.28,
    low: 125.76,
    close: 126.6,
    volume: 246472020,
  },
  {
    x: new Date('2015-03-09'),
    open: 127.96,
    high: 129.57,
    low: 121.63,
    close: 123.59,
    volume: 325921230,
  },
  {
    x: new Date('2015-03-16'),
    open: 123.88,
    high: 129.2451,
    low: 122.87,
    close: 125.9,
    volume: 266016400,
  },
  {
    x: new Date('2015-03-23'),
    open: 127.12,
    high: 128.04,
    low: 122.6,
    close: 123.25,
    volume: 208731730,
  },
  {
    x: new Date('2015-03-30'),
    open: 124.05,
    high: 126.49,
    low: 123.1,
    close: 125.32,
    volume: 161628950,
  },
  {
    x: new Date('2015-04-06'),
    open: 124.47,
    high: 128.1218,
    low: 124.33,
    close: 127.1,
    volume: 181454510,
  },
  {
    x: new Date('2015-04-13'),
    open: 128.37,
    high: 128.57,
    low: 124.46,
    close: 124.75,
    volume: 170090870,
  },
  {
    x: new Date('2015-04-20'),
    open: 125.57,
    high: 130.63,
    low: 125.17,
    close: 130.28,
    volume: 206698310,
  },
  {
    x: new Date('2015-04-27'),
    open: 132.31,
    high: 134.54,
    low: 124.58,
    close: 128.95,
    volume: 417115180,
  },
  {
    x: new Date('2015-05-04'),
    open: 129.5,
    high: 130.57,
    low: 123.36,
    close: 127.62,
    volume: 270197900,
  },
  {
    x: new Date('2015-05-11'),
    open: 127.39,
    high: 129.49,
    low: 124.82,
    close: 128.77,
    volume: 207858180,
  },
  {
    x: new Date('2015-05-18'),
    open: 128.38,
    high: 132.97,
    low: 128.36,
    close: 132.54,
    volume: 216438970,
  },
  {
    x: new Date('2015-05-25'),
    open: 132.6,
    high: 132.91,
    low: 129.12,
    close: 130.28,
    volume: 197468800,
  },
  {
    x: new Date('2015-06-01'),
    open: 131.2,
    high: 131.39,
    low: 128.36,
    close: 128.65,
    volume: 170465550,
  },
  {
    x: new Date('2015-06-08'),
    open: 128.9,
    high: 130.18,
    low: 125.62,
    close: 127.17,
    volume: 219812710,
  },
  {
    x: new Date('2015-06-15'),
    open: 126.1,
    high: 128.31,
    low: 125.71,
    close: 126.6,
    volume: 197925030,
  },
  {
    x: new Date('2015-06-22'),
    open: 127.49,
    high: 129.8,
    low: 126.51,
    close: 126.75,
    volume: 195104520,
  },
  {
    x: new Date('2015-06-29'),
    open: 125.46,
    high: 126.94,
    low: 124.48,
    close: 126.44,
    volume: 150747530,
  },
  {
    x: new Date('2015-07-06'),
    open: 124.94,
    high: 126.23,
    low: 119.22,
    close: 123.28,
    volume: 274904180,
  },
  {
    x: new Date('2015-07-13'),
    open: 125.03,
    high: 129.62,
    low: 124.32,
    close: 129.62,
    volume: 188579340,
  },
  {
    x: new Date('2015-07-20'),
    open: 130.97,
    high: 132.97,
    low: 121.99,
    close: 124.5,
    volume: 336423370,
  },
  {
    x: new Date('2015-07-27'),
    open: 123.09,
    high: 123.91,
    low: 120.91,
    close: 121.3,
    volume: 191087840,
  },
  {
    x: new Date('2015-08-03'),
    open: 121.5,
    high: 122.57,
    low: 112.1,
    close: 115.52,
    volume: 383883210,
  },
  {
    x: new Date('2015-08-10'),
    open: 116.53,
    high: 119.99,
    low: 109.63,
    close: 115.96,
    volume: 344549090,
  },
  {
    x: new Date('2015-08-17'),
    open: 116.04,
    high: 117.65,
    low: 105.645,
    close: 105.76,
    volume: 318855760,
  },
  {
    x: new Date('2015-08-24'),
    open: 110.87,
    high: 113.31,
    low: 102.6,
    close: 113.29,
    volume: 498047270,
  },
  {
    x: new Date('2015-08-31'),
    open: 112.03,
    high: 114.53,
    low: 107.36,
    close: 109.27,
    volume: 297402060,
  },
  {
    x: new Date('2015-09-07'),
    open: 111.65,
    high: 114.21,
    low: 109.77,
    close: 114.21,
    volume: 251859600,
  },
  {
    x: new Date('2015-09-14'),
    open: 116.58,
    high: 116.89,
    low: 111.87,
    close: 113.45,
    volume: 276281980,
  },
  {
    x: new Date('2015-09-21'),
    open: 113.67,
    high: 116.69,
    low: 112.37,
    close: 114.71,
    volume: 238617740,
  },
  {
    x: new Date('2015-09-28'),
    open: 113.85,
    high: 114.57,
    low: 107.31,
    close: 110.38,
    volume: 313017610,
  },
  {
    x: new Date('2015-10-05'),
    open: 109.88,
    high: 112.28,
    low: 108.21,
    close: 112.12,
    volume: 261920950,
  },
  {
    x: new Date('2015-10-12'),
    open: 112.73,
    high: 112.75,
    low: 109.56,
    close: 111.04,
    volume: 184208970,
  },
  {
    x: new Date('2015-10-19'),
    open: 110.8,
    high: 119.228,
    low: 110.11,
    close: 119.08,
    volume: 221612230,
  },
  {
    x: new Date('2015-10-26'),
    open: 118.08,
    high: 121.22,
    low: 113.99,
    close: 119.5,
    volume: 319660750,
  },
  {
    x: new Date('2015-11-02'),
    open: 119.87,
    high: 123.82,
    low: 119.61,
    close: 121.06,
    volume: 194953700,
  },
  {
    x: new Date('2015-11-09'),
    open: 120.96,
    high: 121.81,
    low: 112.27,
    close: 112.34,
    volume: 216054740,
  },
  {
    x: new Date('2015-11-16'),
    open: 111.38,
    high: 119.92,
    low: 111,
    close: 119.3,
    volume: 189492500,
  },
  {
    x: new Date('2015-11-23'),
    open: 119.27,
    high: 119.73,
    low: 117.12,
    close: 117.81,
    volume: 109582040,
  },
  {
    x: new Date('2015-11-30'),
    open: 117.99,
    high: 119.41,
    low: 114.22,
    close: 119.03,
    volume: 205415620,
  },
  {
    x: new Date('2015-12-07'),
    open: 118.98,
    high: 119.86,
    low: 112.851,
    close: 113.18,
    volume: 188609110,
  },
  {
    x: new Date('2015-12-14'),
    open: 112.18,
    high: 112.8,
    low: 105.81,
    close: 106.03,
    volume: 314856190,
  },
  {
    x: new Date('2015-12-21'),
    open: 107.28,
    high: 109,
    low: 105.57,
    close: 108.03,
    volume: 126450510,
  },
  {
    x: new Date('2015-12-28'),
    open: 107.59,
    high: 109.43,
    low: 104.82,
    close: 105.26,
    volume: 123621760,
  },
  {
    x: new Date('2016-01-04'),
    open: 102.61,
    high: 105.85,
    low: 96.43,
    close: 96.96,
    volume: 343000960,
  },
  {
    x: new Date('2016-01-11'),
    open: 98.97,
    high: 101.19,
    low: 95.36,
    close: 97.13,
    volume: 303375940,
  },
  {
    x: new Date('2016-01-18'),
    open: 98.41,
    high: 101.46,
    low: 93.42,
    close: 101.42,
    volume: 242982970,
  },
  {
    x: new Date('2016-01-25'),
    open: 101.52,
    high: 101.53,
    low: 92.39,
    close: 97.34,
    volume: 376481100,
  },
  {
    x: new Date('2016-02-01'),
    open: 96.47,
    high: 97.33,
    low: 93.69,
    close: 94.02,
    volume: 216608840,
  },
  {
    x: new Date('2016-02-08'),
    open: 93.13,
    high: 96.35,
    low: 92.59,
    close: 93.99,
    volume: 230794620,
  },
  {
    x: new Date('2016-02-15'),
    open: 95.02,
    high: 98.89,
    low: 94.61,
    close: 96.04,
    volume: 167001070,
  },
  {
    x: new Date('2016-02-22'),
    open: 96.31,
    high: 98.0237,
    low: 93.32,
    close: 96.91,
    volume: 158759600,
  },
  {
    x: new Date('2016-02-29'),
    open: 96.86,
    high: 103.75,
    low: 96.65,
    close: 103.01,
    volume: 201482180,
  },
  {
    x: new Date('2016-03-07'),
    open: 102.39,
    high: 102.83,
    low: 100.15,
    close: 102.26,
    volume: 155437450,
  },
  {
    x: new Date('2016-03-14'),
    open: 101.91,
    high: 106.5,
    low: 101.78,
    close: 105.92,
    volume: 181323210,
  },
  {
    x: new Date('2016-03-21'),
    open: 105.93,
    high: 107.65,
    low: 104.89,
    close: 105.67,
    volume: 119054360,
  },
  {
    x: new Date('2016-03-28'),
    open: 106,
    high: 110.42,
    low: 104.88,
    close: 109.99,
    volume: 147641240,
  },
  {
    x: new Date('2016-04-04'),
    open: 110.42,
    high: 112.19,
    low: 108.121,
    close: 108.66,
    volume: 145351790,
  },
  {
    x: new Date('2016-04-11'),
    open: 108.97,
    high: 112.39,
    low: 108.66,
    close: 109.85,
    volume: 161518860,
  },
  {
    x: new Date('2016-04-18'),
    open: 108.89,
    high: 108.95,
    low: 104.62,
    close: 105.68,
    volume: 188775240,
  },
  {
    x: new Date('2016-04-25'),
    open: 105,
    high: 105.65,
    low: 92.51,
    close: 93.74,
    volume: 345910030,
  },
  {
    x: new Date('2016-05-02'),
    open: 93.965,
    high: 95.9,
    low: 91.85,
    close: 92.72,
    volume: 225114110,
  },
  {
    x: new Date('2016-05-09'),
    open: 93,
    high: 93.77,
    low: 89.47,
    close: 90.52,
    volume: 215596350,
  },
  {
    x: new Date('2016-05-16'),
    open: 92.39,
    high: 95.43,
    low: 91.65,
    close: 95.22,
    volume: 212312980,
  },
  {
    x: new Date('2016-05-23'),
    open: 95.87,
    high: 100.73,
    low: 95.67,
    close: 100.35,
    volume: 203902650,
  },
  {
    x: new Date('2016-05-30'),
    open: 99.6,
    high: 100.4,
    low: 96.63,
    close: 97.92,
    volume: 140064910,
  },
  {
    x: new Date('2016-06-06'),
    open: 97.99,
    high: 101.89,
    low: 97.55,
    close: 98.83,
    volume: 124731320,
  },
  {
    x: new Date('2016-06-13'),
    open: 98.69,
    high: 99.12,
    low: 95.3,
    close: 95.33,
    volume: 191017280,
  },
  {
    x: new Date('2016-06-20'),
    open: 96,
    high: 96.89,
    low: 92.65,
    close: 93.4,
    volume: 206149160,
  },
  {
    x: new Date('2016-06-27'),
    open: 93,
    high: 96.465,
    low: 91.5,
    close: 95.89,
    volume: 184254460,
  },
  {
    x: new Date('2016-07-04'),
    open: 95.39,
    high: 96.89,
    low: 94.37,
    close: 96.68,
    volume: 111769640,
  },
  {
    x: new Date('2016-07-11'),
    open: 96.75,
    high: 99.3,
    low: 96.73,
    close: 98.78,
    volume: 142244590,
  },
  {
    x: new Date('2016-07-18'),
    open: 98.7,
    high: 101,
    low: 98.31,
    close: 98.66,
    volume: 147358320,
  },
  {
    x: new Date('2016-07-25'),
    open: 98.25,
    high: 104.55,
    low: 96.42,
    close: 104.21,
    volume: 252358930,
  },
  {
    x: new Date('2016-08-01'),
    open: 104.41,
    high: 107.65,
    low: 104,
    close: 107.48,
    volume: 168265830,
  },
  {
    x: new Date('2016-08-08'),
    open: 107.52,
    high: 108.94,
    low: 107.16,
    close: 108.18,
    volume: 124255340,
  },
  {
    x: new Date('2016-08-15'),
    open: 108.14,
    high: 110.23,
    low: 108.08,
    close: 109.36,
    volume: 131814920,
  },
  {
    x: new Date('2016-08-22'),
    open: 108.86,
    high: 109.32,
    low: 106.31,
    close: 106.94,
    volume: 123373540,
  },
  {
    x: new Date('2016-08-29'),
    open: 106.62,
    high: 108,
    low: 105.5,
    close: 107.73,
    volume: 134426100,
  },
  {
    x: new Date('2016-09-05'),
    open: 107.9,
    high: 108.76,
    low: 103.13,
    close: 103.13,
    volume: 168312530,
  },
  {
    x: new Date('2016-09-12'),
    open: 102.65,
    high: 116.13,
    low: 102.53,
    close: 114.92,
    volume: 388543710,
  },
  {
    x: new Date('2016-09-19'),
    open: 115.19,
    high: 116.18,
    low: 111.55,
    close: 112.71,
    volume: 200842480,
  },
  {
    x: new Date('2016-09-26'),
    open: 111.64,
    high: 114.64,
    low: 111.55,
    close: 113.05,
    volume: 156186800,
  },
  {
    x: new Date('2016-10-03'),
    open: 112.71,
    high: 114.56,
    low: 112.28,
    close: 114.06,
    volume: 125587350,
  },
  {
    x: new Date('2016-10-10'),
    open: 115.02,
    high: 118.69,
    low: 114.72,
    close: 117.63,
    volume: 208231690,
  },
  {
    x: new Date('2016-10-17'),
    open: 117.33,
    high: 118.21,
    low: 113.8,
    close: 116.6,
    volume: 114497020,
  },
  {
    x: new Date('2016-10-24'),
    open: 117.1,
    high: 118.36,
    low: 113.31,
    close: 113.72,
    volume: 204530120,
  },
  {
    x: new Date('2016-10-31'),
    open: 113.65,
    high: 114.23,
    low: 108.11,
    close: 108.84,
    volume: 155287280,
  },
  {
    x: new Date('2016-11-07'),
    open: 110.08,
    high: 111.72,
    low: 105.83,
    close: 108.43,
    volume: 206825070,
  },
  {
    x: new Date('2016-11-14'),
    open: 107.71,
    high: 110.54,
    low: 104.08,
    close: 110.06,
    volume: 197790040,
  },
  {
    x: new Date('2016-11-21'),
    open: 110.12,
    high: 112.42,
    low: 110.01,
    close: 111.79,
    volume: 93992370,
  },
  {
    x: new Date('2016-11-28'),
    open: 111.43,
    high: 112.465,
    low: 108.85,
    close: 109.9,
    volume: 155229390,
  },
  {
    x: new Date('2016-12-05'),
    open: 110,
    high: 114.7,
    low: 108.25,
    close: 113.95,
    volume: 151624650,
  },
  {
    x: new Date('2016-12-12'),
    open: 113.29,
    high: 116.73,
    low: 112.49,
    close: 115.97,
    volume: 194003220,
  },
  {
    x: new Date('2016-12-19'),
    open: 115.8,
    high: 117.5,
    low: 115.59,
    close: 116.52,
    volume: 113106370,
  },
  {
    x: new Date('2016-12-26'),
    open: 116.52,
    high: 118.0166,
    low: 115.43,
    close: 115.82,
    volume: 84354060,
  },
  {
    x: new Date('2017-01-02'),
    open: 115.8,
    high: 118.16,
    low: 114.76,
    close: 117.91,
    volume: 103680760,
  },
  {
    x: new Date('2017-01-09'),
    open: 117.95,
    high: 119.93,
    low: 117.94,
    close: 119.04,
    volume: 138446660,
  },
  {
    x: new Date('2017-01-16'),
    open: 118.34,
    high: 120.5,
    low: 118.22,
    close: 120,
    volume: 113576380,
  },
  {
    x: new Date('2017-01-23'),
    open: 120,
    high: 122.44,
    low: 119.5,
    close: 121.95,
    volume: 124406640,
  },
  {
    x: new Date('2017-01-30'),
    open: 120.93,
    high: 130.49,
    low: 120.62,
    close: 129.08,
    volume: 248063580,
  },
  {
    x: new Date('2017-02-06'),
    open: 129.13,
    high: 132.94,
    low: 128.9,
    close: 132.12,
    volume: 136252280,
  },
  {
    x: new Date('2017-02-13'),
    open: 133.08,
    high: 136.27,
    low: 132.75,
    close: 135.72,
    volume: 136326260,
  },
  {
    x: new Date('2017-02-20'),
    open: 136.23,
    high: 137.48,
    low: 135.28,
    close: 136.66,
    volume: 87773190,
  },
  {
    x: new Date('2017-02-27'),
    open: 137.14,
    high: 140.2786,
    low: 136.28,
    close: 139.78,
    volume: 127757050,
  },
  {
    x: new Date('2017-03-06'),
    open: 139.365,
    high: 139.98,
    low: 137.05,
    close: 139.14,
    volume: 99061270,
  },
  {
    x: new Date('2017-03-13'),
    open: 138.85,
    high: 141.02,
    low: 138.82,
    close: 139.99,
    volume: 120881720,
  },
  {
    x: new Date('2017-03-20'),
    open: 140.4,
    high: 142.8,
    low: 139.73,
    close: 140.64,
    volume: 129178500,
  },
  {
    x: new Date('2017-03-27'),
    open: 139.39,
    high: 144.5,
    low: 138.62,
    close: 143.66,
    volume: 126819590,
  },
  {
    x: new Date('2017-04-03'),
    open: 143.71,
    high: 145.46,
    low: 143.05,
    close: 143.34,
    volume: 105274540,
  },
  {
    x: new Date('2017-04-10'),
    open: 143.6,
    high: 143.8792,
    low: 140.06,
    close: 141.05,
    volume: 87342130,
  },
  {
    x: new Date('2017-04-17'),
    open: 141.48,
    high: 142.92,
    low: 140.45,
    close: 142.27,
    volume: 89092650,
  },
  {
    x: new Date('2017-04-24'),
    open: 143.5,
    high: 144.9,
    low: 143.18,
    close: 143.65,
    volume: 90423600,
  },
  {
    x: new Date('2017-05-01'),
    open: 145.1,
    high: 148.98,
    low: 144.27,
    close: 148.96,
    volume: 173861760,
  },
  {
    x: new Date('2017-05-08'),
    open: 149.03,
    high: 156.42,
    low: 149.03,
    close: 156.1,
    volume: 173087500,
  },
  {
    x: new Date('2017-05-15'),
    open: 156.01,
    high: 156.65,
    low: 149.71,
    close: 153.06,
    volume: 156993820,
  },
  {
    x: new Date('2017-05-22'),
    open: 154,
    high: 154.9,
    low: 152.67,
    close: 153.61,
    volume: 103151450,
  },
  {
    x: new Date('2017-05-29'),
    open: 153.42,
    high: 155.45,
    low: 152.22,
    close: 155.45,
    volume: 88670120,
  },
  {
    x: new Date('2017-06-05'),
    open: 154.34,
    high: 155.98,
    low: 146.02,
    close: 148.98,
    volume: 158814040,
  },
  {
    x: new Date('2017-06-12'),
    open: 145.74,
    high: 147.5,
    low: 142.2,
    close: 142.27,
    volume: 219638930,
  },
  {
    x: new Date('2017-06-19'),
    open: 143.66,
    high: 147.16,
    low: 143.66,
    close: 146.28,
    volume: 132832660,
  },
  {
    x: new Date('2017-06-26'),
    open: 147.17,
    high: 148.28,
    low: 142.28,
    close: 144.02,
    volume: 126890110,
  },
  {
    x: new Date('2017-07-03'),
    open: 144.88,
    high: 145.3001,
    low: 142.41,
    close: 144.18,
    volume: 78465450,
  },
  {
    x: new Date('2017-07-10'),
    open: 144.11,
    high: 149.33,
    low: 143.37,
    close: 149.04,
    volume: 109759170,
  },
  {
    x: new Date('2017-07-17'),
    open: 148.82,
    high: 151.74,
    low: 148.57,
    close: 150.27,
    volume: 104744470,
  },
  {
    x: new Date('2017-07-24'),
    open: 150.58,
    high: 153.99,
    low: 147.3,
    close: 149.5,
    volume: 105536280,
  },
  {
    x: new Date('2017-07-31'),
    open: 149.9,
    high: 159.75,
    low: 148.13,
    close: 156.39,
    volume: 170204830,
  },
  {
    x: new Date('2017-08-07'),
    open: 157.06,
    high: 161.83,
    low: 154.63,
    close: 157.48,
    volume: 149860480,
  },
  {
    x: new Date('2017-08-14'),
    open: 159.32,
    high: 162.51,
    low: 156.72,
    close: 157.5,
    volume: 133829670,
  },
  {
    x: new Date('2017-08-21'),
    open: 157.5,
    high: 160.74,
    low: 155.1101,
    close: 159.86,
    volume: 112238670,
  },
  {
    x: new Date('2017-08-28'),
    open: 160.14,
    high: 164.94,
    low: 159.93,
    close: 164.05,
    volume: 125610990,
  },
  {
    x: new Date('2017-09-04'),
    open: 163.75,
    high: 164.25,
    low: 158.53,
    close: 158.63,
    volume: 101419110,
  },
  {
    x: new Date('2017-09-11'),
    open: 160.5,
    high: 163.96,
    low: 157.91,
    close: 159.88,
    volume: 220431100,
  },
  {
    x: new Date('2017-09-18'),
    open: 160.11,
    high: 160.5,
    low: 157.995,
    close: 158.67,
    volume: 27939544,
  },
];
export const PyramidData = [
  { x: 'Sweet Treats', y: 120, text: '120 cal' },
  { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
  { x: 'Vegetables', y: 470, text: '470 cal' },
  { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
  { x: 'Fruits', y: 520, text: '520 cal' },
  { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' },
];
