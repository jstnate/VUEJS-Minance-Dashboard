<template>
  <main>
    <div id="burger-button" class="burger-box">
      <div id="burger-inner" class="burger-inner">
      </div>
    </div>
    <aside id="burger-menu" class="left-aside">
      <img src="@/assets/images/logo.png" alt="logo">

      <div class="link-container">
        <div class="main-link">
          <AsideLinkComponent text="Dashboard" icon="images/dashboard-icon.png"/>
        </div>
  
          <div class="second-link">
            <AsideLinkComponent text="Invoices" icon="images/invoices-icon.png"/>
            <AsideLinkComponent text="Products" icon="images/products-icon.png"/>
            <AsideLinkComponent text="Messages" icon="images/messages-icon.png"/>
            <AsideLinkComponent text="Settings" icon="images/setting-icon.png"/>
            <AsideLinkComponent text="Clients" icon="images/clients-icon.png"/>
          </div>
      </div>

      <AsideLinkComponent text="Log out" icon="images/logout-icon.png"/>
    </aside>

    <section class="page-content">
      <header>
        <h1>Hi, Rogers</h1>

        <div class="search-div">
          <img src="@/assets/images/search-icon.png" alt="">
          <input type="text" placeholder="Search">
        </div>
      </header>

      <div class="page-content-header">
        <div class="wallet">
          <h3>Total Balance</h3>
          <h2>0.97894652 <span>BTC</span></h2>
          <h4>$40 123.56</h4>
        </div>

        <div class="view-link">
          <a id="view-switch" href="#" class="active">Portfolio</a>
          <a id="view-switch" href="#">Funding</a>
          <a id="view-switch" href="#">Assets</a>
          <a id="view-switch" href="#">P2P</a>
        </div>
      </div>

      <div class="chart">
        <div class="edit-chart-buttons">
          <div class="sort-buttons">
            <ChartSortButtonComponent class="responsive-disappear" sort="1H"/>
            <ChartSortButtonComponent class="responsive-disappear" sort="1D"/>
            <ChartSortButtonComponent class="responsive-disappear" sort="3D"/>
            <ChartSortButtonComponent class="responsive-disappear" sort="1W"/>
            <ChartSortButtonComponent class="responsive-disappear" sort="1M"/>
            <span><img src="@/assets/images/calendar.png" alt="calendar"></span>
          </div>

          <div class="switch-buttons">
            <SwitchButtonComponent logo="images/white-bitcoin-icon.png" crypto="BTC"/>
            <img src="@/assets/images/switch-icon.png" alt="switch">
            <SwitchButtonComponent logo="images/white-etherum-icon.png" crypto="ETH"/>
          </div>
        </div>

        <canvas id="canva"></canvas>
      </div>

      <div class="large-transactions">
        <div class="large-transactions-header">
          <h2>Recent Transactions</h2>
          <h3>See all coins</h3>
        </div>

        <LargeTransactionsComponent 
          logo="images/bitcoin-trans-icon.png" 
          crypto="Bitcoin" 
          short="BTC" 
          marketCap="$40,243.70" 
          change="+1,56" 
          chageChart="images/bitcoin-change.png"
        />

        <LargeTransactionsComponent 
          logo="images/white-etherum-icon.png" 
          crypto="Etherum" 
          short="ETH" 
          marketCap="$40,243.70" 
          change="+1,56" 
          chageChart="images/etherum-change.png"
        />
      </div>
    </section>
    
    <img id="profile-button" class="profile-responsive" src="@/assets/images/pdp.png" alt="profile picture">

    <aside id="profile-menu" class="right-aside">
      <div class="action-buttons">
        <img class="small-icon" src="@/assets/images/notification-icon.png" alt="notification icon">
        <img id="desktop-profile-button" src="@/assets/images/pdp.png" alt="profile picture">
      </div>

      <div class="transactions">
        <h2>Recent Transactions</h2>

        <TransactionComponent 
          logo="images/usdt-icon.png" 
          crypto="Usdt" 
          type="Received" 
          amount="+$3,546" 
          date="Today, 13:45 pm"
        />
        <TransactionComponent 
          logo="images/binance-icon.png" 
          crypto="BNB" 
          type="Buy" 
          amount="+$0,7546" 
          date="Today, 5:45 am"
        />
        <TransactionComponent 
          logo="images/litecoin-icon.png" 
          crypto="Lite Coin" 
          type="Withdrawal" 
          amount="-$0,7546" 
          date="Today, 7:55 am"
        />
        <TransactionComponent 
          logo="images/bitcoin-icon.png" 
          crypto="Bitcoin" 
          type="Received" 
          amount="+$2,7546" 
          date="Today, 8:55 am"
        />
        <TransactionComponent 
          logo="images/etherum-icon.png" 
          crypto="Etherum" 
          type="Received" 
          amount="+$1,646" 
          date="Today, 10:02 am"
        />
      </div>

      <div class="assets">
        <h2>Assets</h2>

        <AssetsComponents 
          logo="images/white-bitcoin-icon.png" 
          crypto="Bitcoin" 
          value="121,6450.45" 
          type="BTC"
          color="#FFFFFF"
          bg="linear-gradient(98.73deg, #611D8D 35.75%, #2F7EC1 73.26%)"
          imageSize="60px"
        />
        <AssetsComponents 
          logo="images/etherum-icon.png" 
          crypto="Etherum" 
          value="143,850.45"
          type="ETH"
          color="#000000 !important"
          bg="linear-gradient(99.56deg, #FAFF00 35.82%, #29ABE2 64.75%, rgba(255, 255, 255, 0.7) 91.33%)"
          imageSize="50px"
        />
      </div>
    </aside>
  </main>
</template>

<script>
import AsideLinkComponent from '@/components/AsideLinkComponent.vue'
import TransactionComponent from '@/components/TransactionComponent.vue'
import AssetsComponents from '@/components/AssetsComponent.vue'
import ChartSortButtonComponent from '@/components/ChartSortButtonComponent.vue'
import SwitchButtonComponent from '@/components/SwitchButtonComponent.vue'
import LargeTransactionsComponent from '@/components/LargeTransactionsComponents.vue'

import Chart from 'chart.js'

export default {
  name: 'App',

  components: {
    AsideLinkComponent,
    TransactionComponent,
    AssetsComponents,
    ChartSortButtonComponent,
    SwitchButtonComponent,
    LargeTransactionsComponent
  },
  mounted() {
    const canva = document.getElementById('canva').getContext('2d')

    new Chart(canva, {
      type:'line',
      data: {
          labels: ['5Nov','6Nov','7Nov','8Nov','9Nov','10Nov','11Nov','12Nov','13Nov','14Nov','15Nov',],
          datasets: [
              {
                  label:'ETH',
                  data:[100,600,250,200,100,400,200,250,700,100,300],
                  borderColor: 'rgba(89, 39, 149, 1)',
                  backgroundColor:'transparent'
              },
              {
                  label:'BTC',
                  data:[null,250,500,700,500,400,350,550,500,600,400],
                  borderColor: 'rgba(77, 145, 165, 1)',
                  backgroundColor:'transparent'
              },
              {
                  label:'DOGE',
                  data:[null,null,null,null,0,200,550,300,100,650,null],
                  borderColor: 'rgba(77, 145, 200, 1)',
                  backgroundColor:'transparent'
              }

          ]
      },
      options: {
          scales: {
              y: {
                  ticks: {
                      // Include a dollar sign in the ticks
                      callback: function(value) {
                          return '$' + value;
                      }
                  }
              }
          },
          legend: {
              display: false
          },
          tooltips: {
              callbacks: {
                label: (item) => `${item.yLabel} GB`,
              },
            },
      }
    })
  }
}

</script>

<style lang="scss" scoped>
  main {
    display: flex;
    height: 100vh;
    width: 100vw;

    @media screen and (max-width: 1024px) {
      height: 100%;
    }

    .burger-box {
      position: relative;
      display: none;
      width: 40px;
      height: 24px;
      position: absolute;
      top: 50px;
      left: 20px;
      z-index: 100;

      @media screen and (max-width: 1024px) {
        display: inline-block;
      }

      &:hover {
        cursor: pointer;
      }

      &.active {
        .burger-inner {
          transform: rotate(45deg);

          &::after {
            bottom: 0;
            transition: bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) .12s;
            transform: rotate(-90deg);
          }

          &::before {
            transition: bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) .12s;
            transform: rotate(-90deg);
            top: 0;
          }
        }
      }

      .burger-inner {
        transition-timing-function: cubic-bezier(.55,.055,.675,.19);
        transition-duration: 75ms;
        position: absolute;
        width: 40px;
        height: 4px;
        transition-timing-function: ease;
        transition-duration: .15s;
        transition-property: transform;
        border-radius: 4px;
        background-color: #fff;

        &::after, &::before {
          display: block;
          content: '';
          position: absolute;
          width: 40px;
          height: 4px;
          transition-timing-function: ease;
          transition-duration: .15s;
          transition-property: transform;
          border-radius: 4px;
          background-color: #fff;
        }

        &::after {
          bottom: -10px;
        }

        &::before {
          top: -10px;
        }
      }
    }

    .left-aside {
      width: 20vw;
      padding: 1.5rem 2rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100vh;

      @media screen and (max-width: 1024px) {
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: .15s ease;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000000;
        z-index: 5;
        padding: 5rem 2rem 2rem;

        &.active {
          width: 40vw;
          opacity: 1;
          transform: scaleX(1);
        }
      }

      img {
        width: 90%;
      }

      .link-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        height: 50%;

        .main-link {
          width: 100%;
          display: flex;
          padding: .8rem;
          border-radius: 15px;
          background: linear-gradient(266.37deg, #FAFF00 -5.82%, #FAFF00 15.95%, #1970D6 41.2%, #6C1182 72.88%);
          align-items: center;
          justify-content: center;

          a {
            color: #000000;
            font-size: 20px;
            gap: 30px;

            &:hover {
              color: #ffffff;
              cursor: pointer;
            }
          }
        }

        .second-link {
          width: 85%;
          height: 70%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;

        }
      }
    }

    section {
      width: 55%;
      height: 100vh;

      @media screen and (max-width: 1024px) {
        padding: 5rem 0;
        height: auto;
        width: 90vw;
        margin: auto;
      }

      header {
        display: flex;
        padding: 2rem 2rem 1rem;
        align-items: center;
        width: 55vw;

        @media screen and (max-width: 1024px) {
          width: 100%;
          padding: 2rem 2rem 1rem;
        }

        h1 {
          width: 400px;
          font-size: 28px;
          color: #ffffff;
        }

        .search-div {
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-radius: 30px;
          width: 500px;
          padding: .2em 1em;
          gap: 15px;

          img {
            width: 30px;
          }

          input {
            width: 100%;
            font-size: 18px;
            border: none;
            color: #000000;

            &:focus {
              outline: none;
            }

            &::placeholder {
              font-size: 18px;
            }
          }
        }
      }

      .page-content-header {
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 80px;
        color: #FFFFFF;

        @media screen and (max-width: 1024px) {
          padding: 1rem 0;
        }

        @media screen and (max-width: 768px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }

        .wallet {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;

          h2 {
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 10px;
            width: 200px;

            span {
              background: #FAFF00;
              color: #000000;
              padding: 5px 10px;
              font-size: 12px;
              border-radius: 10px;
            }
          }

          h3 {
            opacity: .8;
          }

          h4 {
            opacity: .7;
          }
        }

        .view-link {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          background-color: #292727;
          padding: .5rem 2rem;
          border-radius: 15px;
          width: 350px;
          position: relative;

          a {
            text-decoration: none;
            padding: .5rem 1rem;
            border-radius: 15px;
            color: #FFFFFF;

            &.active {
              background-color: #000000;
            }
          }
        }
      }

      .chart {
        background: rgba(48, 53, 65, 0.67);
        border-radius: 30px;
        height: 50vh;
        width: 100%;
        padding: 1rem;

        .edit-chart-buttons {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          .sort-buttons {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;

            @media screen and (max-width: 1024px) {
              .responsive-disappear {
                display: none;
              }
            }

            span {
              border-radius: 5px;
              transform: translateY(2px);
            }
          }

          .switch-buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;

            img {
              width: 30px;
              cursor: pointer;
            }
          }
        }
      }

      .large-transactions {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 1rem;

        @media screen and (max-width: 1024px) {
          width: 100%;
        }

        &-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 85%;
          color: #FFFFFF;

          @media screen and (max-width: 1024px) {
            width: 90%;
          }
        }
      }
    }

    .profile-responsive {
      width: 40px;
      aspect-ratio: 1/1;
      position: absolute;
      right: 16px;
      top: 32px;
      display: none;
      z-index: 100;
      cursor: pointer;

      @media screen and (max-width: 1024px) {
        display: block;
      }
    }

    .right-aside {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 0;
      width: 25%;

      @media screen and (max-width: 1024px) {
        width: 50vw;
        height: 100vh;
        position: absolute;
        right: 0;
        transform: scaleX(0);
        top: 0;
        z-index: 5;
        background-color: #000000;
        transition: .15s ease;
        transform-origin: right;
        
        
        &.active {
          transform: scaleX(1);

          &::before {
            content: '';
            width: 50vw;
            height: 100vh;
            position: absolute;
            left: -50vw;
            top: 0;
            background-color: rgba($color: #000000, $alpha: .25);
            backdrop-filter: blur(10px);
          }
        }
      }

      .action-buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 1rem;

        img {
          width: 40px;
        }

        @media screen and (max-width: 1024px) {
            #desktop-profile-button {
            display: none;
          }
        }

        .small-icon {
          width: 30px;
        }
      }

      .transactions {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        padding: 0 1rem;
        gap: 20px;
        height: 45%;
        margin: 20px 0 10px;
      }

      .assets {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        padding: .5rem 1rem 0;
        gap: 10px;
        height: 45%;
      }
    }
  }
</style>
