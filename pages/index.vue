<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    <div class="page">
        <div class="sidebar">
            <img src="/pictures/logotab.png" alt="logotab" />

            <div class="sidebar-item">
                <div class="sidebar-icon">
                    <i class="fa-solid fa-chart-pie"></i>
                </div>
                <a href="#" class="act">
                    <p>หน้าหลัก</p>
                </a>
            </div>

            <div class="sidebar-item">
                <div class="sidebar-icon">
                    <i class="fa-solid fa-circle-info"></i>
                </div>
                <a href="#">
                    <p>จัดการข้อมูลผู้ป่วย</p>
                </a>
            </div>

            <div class="sidebar-item">
                <div class="sidebar-icon">
                    <i class="fa-solid fa-chart-line"></i>
                </div>
                <a href="#">
                    <p>สถานะการติดตาม</p>
                </a>
            </div>

            <div class="sidebar-item siderbar-item-active">
                <div class="sidebar-icon ">
                    <i class="fa-solid fa-people-group" style="color: white;"></i>
                </div>
                <a href="#">
                    <p style="color: white;">จัดการข้อมูลเจ้าหน้าที่ฯลฯ</p>
                </a>
            </div>

            <div class="sidebar-item">
                <div class="sidebar-icon">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </div>
                <a href="#">
                    <p>ออกจากระบบ</p>
                </a>
            </div>

            <div class="hr"></div>
        </div>
        </div>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Mali:wght@700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans", sans-serif;
}

/* .top-bar {
    background-color: #5D97EF;
    display: flex;
    align-items: center;
} */


h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 30px;
    padding: 10px;
}

.page {
    width: 100%;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    display: flex;
    color: #151D48;
}

.sidebar {
    width: 25%;
    padding: 15px;
}

.content {
    width: 100%;
    background-color: #5D97EF;
    border: 2px solid black;
}


.sidebar-item {
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #808191;
}

.sidebar-icon {
    width: 45px;
    height: 45px;
    color: #808191;
    /* background-color: #353540; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 20px;
}

.siderbar-item-active {
    color: #737791;
}

.siderbar-item-active {
    background-color: #5D97EF;
    color: #ffff;
    border-radius: 10px;
}

.fa-chart-pie {
    color: #737791;
}

.sidebar-item a {
    text-decoration: none;
    color: #737791;
}

.sidebar-item .act {
    text-decoration: none;
    color: #737791;
}

.fa-solid {
    font-size: 1.5rem;
}

.hr {
    width: 100%;
    height: 1px;
    background-color: #393846;
}
</style>