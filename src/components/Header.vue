<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/" active-class="link--active" exact>home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/test1" active-class="link--active" exact>test1</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/test2" active-class="link--active" exact>test2</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/test3" active-class="link--active" exact>test3</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/practice" active-class="link--active" exact>practice</router-link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style scoped>
a{
    text-decoration-line: none;
    padding: 6px;
}

.link--active{
    border: 1px solid  #e5e5e9;
    border-radius: 5px;
}
</style>