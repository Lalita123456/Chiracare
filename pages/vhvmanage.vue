<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    <div class="page h-lvh w-full bg-white flex text-bluetext">
        <div class="sidebar w-1/4 p-3.5">
            <img src="/pictures/logotab.png" alt="logotab" />

            <div class="items-center my-5 flex flex-wrap">
                <div
                    class="sidebar-icon w-11 h-11 items-center justify-center text-gray mr-5 rounded-xl flex flex-wrap">
                    <i class="fa-solid fa-chart-pie text-2xl"></i>
                </div>
                <a href="#" class="act no-underline">
                    <p class="text-gray flex">หน้าหลัก</p>
                </a>
            </div>

            <div class="items-center my-5 flex flex-wrap">
                <div
                    class="sidebar-icon w-11 h-11 items-center justify-center text-gray mr-5 rounded-xl flex flex-wrap">
                    <i class="fa-solid fa-circle-info text-2xl"></i>
                </div>
                <a href="#" class="no-underline">
                    <p class="text-gray">จัดการข้อมูลผู้ป่วย</p>
                </a>
            </div>

            <div class="items-center my-5 flex flex-wrap">
                <div
                    class="sidebar-icon w-11 h-11 items-center justify-center text-gray mr-5 rounded-xl flex flex-wrap">
                    <i class="fa-solid fa-chart-line text-2xl"></i>
                </div>
                <a href="#" class="no-underline">
                    <p class="text-gray">สถานะการติดตาม</p>
                </a>
            </div>

            <div class="siderbar-item-active items-center my-5 bg-bluesky rounded-lg flex flex-wrap">
                <div
                    class="sidebar-icon w-11 h-11 items-center justify-center text-gray mr-5 rounded-xl flex flex-wrap">
                    <i class="fa-solid fa-people-group text-2xl" style="color: white;"></i>
                </div>
                <a href="#" class="no-underline">
                    <p class="text-white">จัดการข้อมูลเจ้าหน้าที่ฯลฯ</p>
                </a>
            </div>

            <div class="items-center my-5 flex flex-wrap">
                <div
                    class="sidebar-icon w-11 h-11 items-center justify-center text-gray mr-5 rounded-xl flex flex-wrap">
                    <i class="fa-solid fa-right-from-bracket text-2xl"></i>
                </div>
                <a href="/login" class="no-underline">
                    <p class="text-gray">ออกจากระบบ</p>
                </a>
            </div>

        </div>
        <div class="content w-full">
            <!-- Top Bar -->
            <div class="flex items-center justify-between">
                <div class="top-bar-header">
                    <h1 class="font-Poppins font-semibold not-italic text-3xl p-2.5 ">
                        จัดการข้อมูลเจ้าหน้าที่ติดตามผู้ป่วย</h1>
                </div>
                <!-- Nav bar -->
                <div class="flex flex-wrap items-center" style="margin: 0 10px">
                    <i class="fa-regular fa-bell"
                        style="color: black; margin: 0 8px; padding: 8px; border-radius: 5px; background-color: #e5e7eb"></i>
                    <img style="width: 35px; height: 35px; margin: 0 5px; border-radius: 10px;"
                        src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/340812573_1222119048693459_7878843100786500839_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=v4rRqvtzj0oQ7kNvgHkDaJJ&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYAbsvZi7BZuzvvEjwZYQzMJbnjD-T8OVZScvrUwEIBHEQ&oe=668232C2"
                        alt="image">
                    <p style="font-size: 10px; font-weight: 600; color: black;">Kanlayanee</p>
                </div>
            </div>
            <!-- Search bar-->
            <div class="container-bar flex flex-wrap m-7">
                <div class="pr-3">
                    <h3>ค้นหารายชื่อ</h3>
                    <input type="search" class="block p-2.5 w-64 z-20 text-sm rounded-xl border-2 border-slate-400"
                        placeholder="ค้นหาที่นี่..." required />
                </div>

                <div class="pr-3">
                    <h3>เขตที่รับผิดชอบ</h3>
                    <input type="search" class="block p-2.5 w-64 z-20 text-sm rounded-xl border-2 border-slate-400"
                        placeholder="ค้นหา" required />
                </div>

                <div class="pr-3">
                    <h3>เลขบัตรประชาชน</h3>
                    <input type="search" class="block p-2.5 w-64 z-20 text-sm rounded-xl border-2 border-slate-400"
                        placeholder="ค้นหา" required />
                </div>

                <div class="pr-3">
                    <h3>เบอร์โทรศัพท์ฉุกเฉิน</h3>
                    <input type="search" class="block p-2.5 w-64 z-20 text-sm rounded-xl border-2 border-slate-400"
                        placeholder="ค้นหา" required />
                </div>

                <div class="pr-3 ">
                    <h3>สถานะผู้ป่วย</h3>
                    <select name="cars" class="block p-2.5 w-64 z-20 text-sm rounded-xl border-2 border-slate-400"
                        placeholder="ทั้งหมด" required>
                        <option value="ทั้งหมด">ทั้งหมด</option>
                        <option value="กำลังติดตาม">กำลังติดตาม</option>
                        <option value="ติดตามแล้ว">ติดตามแล้ว</option>
                    </select>

                </div>
                <!-- <div class="flex flex-wrap items-center"> -->
                    <a href="#" class="">
                        <i class="fa-solid fa-user-plus flex flex-wrap items-center bg-bluesky text-white mt-8 p-2 rounded-md"
                           >
                        </i>
                    </a>
                <!-- </div> -->

                <!-- Table info -->


                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 w-full">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 ">
                                    ชื่อ-นามสกุล
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    สถานะ
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    เขตที่รับผิดชอบ
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ไอดีไลน์ (LINE ID)
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    เลขบัตรประชาชน
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    เบอร์โทรศัพท์ฉุกเฉิน
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    นิรนาม มือที่สาม
                                </th>
                                <td class="px-6 py-4">
                                    อาสาสมัครสาธารณสุข
                                </td>
                                <td class="px-6 py-4">
                                    1
                                </td>
                                <td class="px-6 py-4">
                                    niranam
                                </td>
                                <td class="px-6 py-4 ">
                                    1666666666667
                                </td>
                                <td class="px-6 py-4">
                                    0600005222
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="#" class="font-medium text-gray-600 dark:text-blue-500 hover:underline">
                                        <i class="fa-regular fa-pen-to-square pr-2 text-xl" style="color: black; margin: 0 8px; padding: 8px; border-radius: 5px; background-color: #e5e7eb"></i>
                                    </a>
                                    <a href="#" class="font-medium text-gray-600 dark:text-blue-500 hover:underline">
                                        <i class="fa-solid fa-trash text-xl "  style="color: black; margin: 0 8px; padding: 8px; border-radius: 5px; background-color: #e5e7eb"></i>
                                    </a>
                                </td>
                            </tr>
                            <!-- ชื่อที่ 2 -->
                            <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    นามนิร กาลเทศะ
                                </th>
                                <td class="px-6 py-4">
                                    เสนารักษ์
                                </td>
                                <td class="px-6 py-4">
                                    2
                                </td>
                                <td class="px-6 py-4">
                                    namnira667
                                </td>
                                <td class="px-6 py-4">
                                    1666666666667
                                </td>
                                <td class="px-6 py-4">
                                    0600005222
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="#" class="font-medium text-gray-600 dark:text-blue-500 hover:underline">
                                        <i class="fa-regular fa-pen-to-square pr-2 text-xl" style="color: black; margin: 0 8px; padding: 8px; border-radius: 5px; background-color: #e5e7eb"></i>
                                    </a>
                                    <a href="#" class="font-medium text-gray-600 dark:text-blue-500 hover:underline">
                                        <i class="fa-solid fa-trash text-xl "  style="color: black; margin: 0 8px; padding: 8px; border-radius: 5px; background-color: #e5e7eb"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <!-- Search bar-->
        </div>
    </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Mali:wght@700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans", sans-serif;
}
</style>

<script>
export default {

}
</script>