<script setup>
import {Head} from "@inertiajs/vue3";
import LandingNav from "../../Components/LandingNav.vue";

</script>

<template>
    <Head title="Features"/>
    <LandingNav></LandingNav>


    <section class="bg-gray-100 py-8 px-3 min-h-screen">
        <h1 class="text-3xl font-semibold mb-8 mt-10 text-center">Features</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Client Management Card -->
            <div class="bg-white rounded-lg p-6 shadow-md">
                <div class="flex items-center mb-4">
                    <i class="fas fa-users text-2xl text-blue-500 mr-4"></i>
                    <h2 class="text-xl font-semibold ml-2">Client Management</h2>
                </div>
                <p class="text-gray-700 mb-4">Easily manage client information and communication.</p>
                <ul class="text-gray-600">
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Client Profiles</li>
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Appointment History</li>
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Document Storage</li>
                </ul>
            </div>

            <!-- Training Plans Card -->
            <div class="bg-white rounded-lg p-6 shadow-md">
                <div class="flex items-center mb-4">
                    <i class="fas fa-dumbbell text-2xl text-blue-500 mr-4"></i>
                    <h2 class="text-xl font-semibold ml-2">Plans and Tracking</h2>
                </div>
                <p class="text-gray-700 mb-4">Create customized training plans and track progress.</p>
                <ul class="text-gray-600">
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Personalized Training Programs</li>
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Progress Monitoring</li>
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Client Engagement</li>
                </ul>
            </div>

            <!-- Document Management Card -->
            <div class="bg-white rounded-lg p-6 shadow-md">
                <div class="flex items-center mb-4">
                    <i class="fas fa-file-alt text-2xl text-blue-500 mr-4"></i>
                    <h2 class="text-xl font-semibold ml-2">Document Management</h2>
                </div>
                <p class="mb-4">Securely store and manage important documents.</p>
                <ul>
                    <li><i class="fas fa-check text-blue-500 mr-2"></i>Centralized Document Repository</li>
                    <li><i class="fas fa-check text-blue-500 mr-2"></i>Accessibility and Sharing</li>
                    <li><i class="fas fa-check text-blue-500 mr-2"></i>Document Security</li>
                </ul>
            </div>

            <div class="bg-white rounded-lg p-4 shadow-md">
                <h2 class="text-xl font-semibold text-gray-700">Reporting and Analytics</h2>
                <ul class="text-gray-600">
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Generate reports on client progress, session history, and business performance.</li>
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Analytics to track the popularity of different training programs.</li>
                </ul>
            </div>

            <div class="bg-white rounded-lg p-4 shadow-md">
                <h2 class="text-xl font-semibold text-gray-700">Inventory Management</h2>
                <ul class="text-gray-600">
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Manage and track training equipment and supplies.</li>
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Receive notifications for low stock levels.</li>
                </ul>
            </div>

            <div class="bg-white rounded-lg p-4 shadow-md">
                <h2 class="text-xl font-semibold text-gray-700">Resource Library</h2>
                <ul class="text-gray-600">
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>A repository of training resources, articles, videos, and tutorials.</li>
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Organize resources by categories or topics.</li>
                </ul>
            </div>

            <div class="bg-white rounded-lg p-4 shadow-md">
                <h2 class="text-xl font-semibold text-gray-700">Other Features</h2>
                <ul class="text-gray-600">
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>To-do lists or task management features for trainers to stay organized.</li>
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>A mobile app version for trainers to access information and schedules on the go.</li>
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Implement strong security measures to protect client and dog information.</li>
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Ensure the application can grow with the trainer's business, accommodating more clients and dogs.</li>
                    <li class="mb-2"><i class="fas fa-check text-blue-500 mr-2"></i>Allow new clients to book appointments online.</li>
                </ul>
            </div>

        </div>
    </section>
</template>
