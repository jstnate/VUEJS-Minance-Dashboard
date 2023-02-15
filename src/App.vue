<template>
  <main>
    <aside class="left-aside">
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

    <section>
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
          <a href="#" class="active">Portfolio</a>
          <a href="#">Funding</a>
          <a href="#">Assets</a>
          <a href="#">P2P</a>
        </div>
      </div>
    </section>

    <aside class="right-aside">
      <div>
        <img src="" alt="">
        <img src="" alt="">
      </div>

      <div>
        <h2>Recent Transactions</h2>

        <TransactionComponent 
          logo="images/usdt-logo.png" 
          crypto="Usdt" 
          type="Received" 
          amount="+$3,546" 
          date="Today, 13:45 pm"
        />
      </div>
    </aside>
  </main>
</template>

<script>
import AsideLinkComponent from '@/components/AsideLinkComponent.vue'
import TransactionComponent from '@/components/TransactionComponent.vue';
import TransactionComponent from '@/components/TransactionComponent.vue'
export default {
  name: 'App',

  components: {
    AsideLinkComponent,
    TransactionComponent
},
}

</script>

<style lang="scss" scoped>
  main {
    display: flex;
    height: 100vh;
    width: 100vw;

    .left-aside {
      border: 2px solid red;
      width: 20vw;
      padding: 1.5rem 2rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100vh;

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
      border: 2px solid white;

      header {
        display: flex;
        padding: 2rem;
        align-items: center;
        border: 2px solid green;
        width: 55vw;

        h1 {
          width: 400px;
          font-size: 28px;
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
        border: 2px solid blue;

        .wallet {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;

          h2 {
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 20px;

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

            &.active {
              background-color: #000000;
            }
          }
        }
      }
    }
  }
</style>
