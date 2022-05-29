<template>
 

  <!-- Housing Container -->
    <div class="housing position-relative">

        <!-- Mobile Only View -->
        <div class="cov_con d-none d-md-flex justify-content-center position-absolute position-fixed">
            <p class="cov_header align-self-center">Sorry view only allowed on Mobile for now</p>
        </div>

        <!-- Mobile Header -->
        <div class="mob_header_con">
            <div class="container d-flex justify-content-between align-items-center">
                <p class="mob_header">Weather App</p>

                <div class="d-flex">
                    <span class="mob_icon position-relative mr-3"> <div class="not_dot position-absolute"></div> <i class="fas fa-bell"></i> </span>
                    <div class="mob_icon2 d-flex justify-content-center align-items-center"> <i class="fas fa-search"></i> </div>
                </div>
            </div>
        </div>


         <router-view/>
        

        <!-- Bottom Menu -->
        <div class="bot_con position-sticky fixed-bottom">
            <div class="container d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column align-items-center">
                    <span class="bot_icon d-flex justify-content-center align-items-center"> <i class="fas fa-home"></i>
                    </span>
                    <p class="bot_text">Home</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                    <span class="bot_icon d-flex justify-content-center align-items-center"> <i
                            class="fas fa-tasks"></i> </span>
                    <p class="bot_text">Todo</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                    <span class="bot_icon d-flex justify-content-center align-items-center"> <i
                            class="far fa-comment-alt"></i> </span>
                    <p class="bot_text">Feedback</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                    <span class="bot_icon d-flex justify-content-center align-items-center"> <i class="fas fa-cog"></i>
                    </span>
                    <p class="bot_text">Settings</p>
                </div>
            </div>
        </div>

    </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
