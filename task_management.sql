-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2020 at 08:09 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2020_11_30_101803_create_projects_table', 1),
(5, '2020_11_30_102056_create_tasks_table', 1),
(6, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(7, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(8, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(9, '2016_06_01_000004_create_oauth_clients_table', 2),
(10, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('16f535f7a9d2c590cef939914335dfb3740c6e0d3e69ed98c22c60723a3450e5c59057fb36b72e6c', 3, 3, 'authToken', '[]', 0, '2020-12-06 15:50:35', '2020-12-06 15:50:35', '2021-06-06 21:50:34'),
('176906e9f20f8ec97c4a55bee6663c8e362457eecb6b0c053bede79581da3e14c535557b521d2762', 1, 3, 'authToken', '[]', 0, '2020-12-07 00:47:59', '2020-12-07 00:47:59', '2021-06-07 06:47:59'),
('1c8aed148505e858db20ec22863b06188e447ed8033351aa1ca9c976a1d063a51455782b5f1b5612', 1, 3, 'authToken', '[]', 0, '2020-12-07 01:18:23', '2020-12-07 01:18:23', '2021-06-07 07:18:23'),
('2653d35982d1342ebdb861b87af1ade433c812b7e59f8ff3085df95c735078ca0302060d957c174f', 1, 3, 'authToken', '[]', 0, '2020-12-06 17:15:03', '2020-12-06 17:15:03', '2021-06-06 23:15:03'),
('271151e5378e57b0906c5ce37ea3edeeabdd770c3fd9e1a4257f37d7748f3655bd06be35328b7a81', 2, 3, 'authToken', '[]', 0, '2020-12-06 15:08:44', '2020-12-06 15:08:44', '2021-06-06 21:08:44'),
('2d2198b6bd5dbbac2bbd70b3cacc48e1f8ebc113bfb6055ffb2f72bcbcec7ba9c7107345d6933987', 6, 3, 'authToken', '[]', 0, '2020-12-06 16:24:01', '2020-12-06 16:24:01', '2021-06-06 22:24:01'),
('34ab57b501b93d19e3b7d4d9dbbfdc53a4ae316c3e723d6930cdf588ccbad258736657cd7d1b5c40', 7, 3, 'authToken', '[]', 0, '2020-12-06 16:54:22', '2020-12-06 16:54:22', '2021-06-06 22:54:22'),
('3e024c6a0c2e772d60d727275cdd4dda96bd1be0c4ef1b388db773a744322ddeeb076fd8805138ec', 1, 3, 'authToken', '[]', 0, '2020-12-07 01:23:24', '2020-12-07 01:23:24', '2021-06-07 07:23:24'),
('4c886b96883481b254115264e93657d72f498872bce45b24e48b36c680e60250d6b93df537dc098d', 1, 3, 'authToken', '[]', 0, '2020-12-07 01:17:17', '2020-12-07 01:17:17', '2021-06-07 07:17:17'),
('4f69e6671544cfb91956176906bde1aeb04a0bf3bb5c3a020005e90a77eb3a13b4c3edf50c84bef3', 1, 3, 'authToken', '[]', 0, '2020-12-07 01:42:39', '2020-12-07 01:42:39', '2021-06-07 07:42:39'),
('6c172f33bf77258161f46fe7e9d17e17b83637745edb4c815ba27376e8bdec132570e62207002a1b', 1, 3, 'authToken', '[]', 0, '2020-12-07 01:37:30', '2020-12-07 01:37:30', '2021-06-07 07:37:30'),
('703606f10b13aa27eafa192a4b1ee63c397f3c576366f2b962f3f46087653e0d986f5b32db5b37db', 1, 3, 'authToken', '[]', 0, '2020-12-07 03:59:59', '2020-12-07 03:59:59', '2021-06-07 09:59:59'),
('7e4a2ade98fdb3ed1d23ec70818927984c3149e650cd67d5c2a8f5c70f434b3716cfea2a778cbb3a', 1, 3, 'authToken', '[]', 0, '2020-12-06 17:09:53', '2020-12-06 17:09:53', '2021-06-06 23:09:53'),
('7faec0c56db06c4e8e043633a89ffd2ea0190deacabe1a00d14843770ed782a4e2b85221a5fa0ac7', 8, 3, 'authToken', '[]', 0, '2020-12-07 01:41:09', '2020-12-07 01:41:09', '2021-06-07 07:41:08'),
('86d38475f11dee81c2d0a43195e943d659a694a210379351d3e81da5b9c1a6007c5864b03fadce12', 1, 3, 'authToken', '[]', 0, '2020-12-07 01:04:09', '2020-12-07 01:04:09', '2021-06-07 07:04:09'),
('89151c04dfd4890f01beaeea0015609a3c9355f1b396ae4c87cfde75dd448fe20f0a992a945d25ad', 1, 3, 'authToken', '[]', 0, '2020-12-07 00:43:45', '2020-12-07 00:43:45', '2021-06-07 06:43:45'),
('8a5c98b333d3339fd035666e6f944f75d70955573ce7b7c4e02b3aafa983c9b1971df8aeee118849', 1, 3, 'authToken', '[]', 0, '2020-12-07 01:24:58', '2020-12-07 01:24:58', '2021-06-07 07:24:58'),
('8c055f74320482761fb07d8d7cbc09cfd52d1e8375be3c91e0d9467ea424abd933d6f73acd26911a', 1, 3, 'authToken', '[]', 0, '2020-12-06 16:09:23', '2020-12-06 16:09:23', '2021-06-06 22:09:23'),
('9558b9348a2d8125ade3e8d7c8fdc5f87dc5005a5d8564ca692c72d6a59b7fcee6b3f43b6bfa4d4e', 1, 3, 'authToken', '[]', 0, '2020-12-07 12:46:50', '2020-12-07 12:46:50', '2021-06-07 18:46:50'),
('956964436dc75d6f042382bfaa63b28be124e976993a1558bc7aad7e5e90fca92cdbaa566b5d6bcb', 1, 3, 'authToken', '[]', 0, '2020-12-07 01:09:32', '2020-12-07 01:09:32', '2021-06-07 07:09:32'),
('9d56a4b1af7df6fe6663fa93eb0e73c01a3cc24e2241e558ea5a079fc728f8a1d134b94ef316feb7', 5, 3, 'authToken', '[]', 0, '2020-12-06 16:22:34', '2020-12-06 16:22:34', '2021-06-06 22:22:34'),
('a32b81f9100c96356a3448894b012f3313678c71e191dfb9c1d45563777aa27f8b7037d0d9bad1e9', 1, 3, 'authToken', '[]', 0, '2020-12-07 12:41:15', '2020-12-07 12:41:15', '2021-06-07 18:41:15'),
('ab3ddf34386d34a756233b0140ad11c5742a5f424d8365e56d7515f0dba7271f79959a5b10a1d64b', 1, 3, 'authToken', '[]', 0, '2020-12-06 13:42:50', '2020-12-06 13:42:50', '2021-12-06 19:42:50'),
('ab7b0ceb7dc86207054a2ce2d42e930cce2a2cc5ecec0824c544dfa89d2b7e2f9dd8ffd0a0a48e9f', 1, 3, 'authToken', '[]', 0, '2020-12-07 02:59:59', '2020-12-07 02:59:59', '2021-06-07 08:59:59'),
('b01746a1fd8c4c6a9152c2715fb84d1fd9cbf16b418b6bd809f0574daf50f4d303fdab9e8235a4cb', 1, 3, 'authToken', '[]', 0, '2020-12-07 12:36:29', '2020-12-07 12:36:29', '2021-06-07 18:36:28'),
('b1f4022190e392fce78493c7e0aa721c1541e865ea094fc2675793615a18d7ed71add34359205841', 1, 3, 'authToken', '[]', 0, '2020-12-07 00:53:38', '2020-12-07 00:53:38', '2021-06-07 06:53:38'),
('c16d8ccdbbc148aeef76ebf7c507d7b4f0c8100d1ae037051cc4c428da9e4e7875d770fd29e8fe7b', 1, 3, 'authToken', '[]', 0, '2020-12-07 01:44:21', '2020-12-07 01:44:21', '2021-06-07 07:44:21'),
('c756813c927c00b3fe8a609c34cb820d28153de701cb459a417930b5c35286fb96f16c2e74a80e8c', 1, 3, 'authToken', '[]', 0, '2020-12-06 17:04:40', '2020-12-06 17:04:40', '2021-06-06 23:04:40'),
('c9f5080f4537530512a6e29f68d349150699beeba7305e084c9efdf2a90371e2bc6d445dff212b61', 1, 3, 'authToken', '[]', 0, '2020-12-07 12:40:06', '2020-12-07 12:40:06', '2021-06-07 18:40:06'),
('cd73bdb1d2c6df80e2569647485bd30b2dace25a510b43d061c79cc9bd06198ca1ddc53f6d332204', 1, 3, 'authToken', '[]', 0, '2020-12-06 16:12:22', '2020-12-06 16:12:22', '2021-06-06 22:12:22'),
('cd8f465c1f32b8cf064d36958daa98881e8406fd7d56d6a6b492b5e5504f116d96dc416fdd855256', 1, 3, 'authToken', '[]', 0, '2020-12-07 12:53:47', '2020-12-07 12:53:47', '2021-06-07 18:53:47'),
('cdcc1a011f857b447ce7542c62af00d4c72f069d3d86bec37b84a7c9e9e6d5447e3986230d1fca18', 1, 3, 'authToken', '[]', 0, '2020-12-06 14:39:36', '2020-12-06 14:39:36', '2021-06-06 20:39:36'),
('da45c4026d05b72dd64dddf5f97a74b6990cc4bc557a05e079d3ff3742ed2d0fffe6706ae3d13700', 1, 3, 'authToken', '[]', 0, '2020-12-07 01:10:04', '2020-12-07 01:10:04', '2021-06-07 07:10:04'),
('e90f6f0d5f1d68171b6ed92353dd6d6414716edce103aac16be48ee461879e1de82501f91c22b7a5', 4, 3, 'authToken', '[]', 0, '2020-12-06 16:11:01', '2020-12-06 16:11:01', '2021-06-06 22:11:01'),
('ee985b44115a9bc5f200fd1897415baf5a3f13fa04d0e3dc05643821ac7df04e33b6cfb2030ddce3', 1, 3, 'authToken', '[]', 0, '2020-12-07 01:02:08', '2020-12-07 01:02:08', '2021-06-07 07:02:08');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'CwPXzhIoVAlO1RVHVrR5yiMj5QL41R9OsJF1KDW0', NULL, 'http://localhost', 1, 0, 0, '2020-12-06 13:23:35', '2020-12-06 13:23:35'),
(2, NULL, 'Laravel Password Grant Client', 'nBmIUQVSTNqqdBEoRxMDepixp4O8V2X8hLiko8ph', 'users', 'http://localhost', 0, 1, 0, '2020-12-06 13:23:36', '2020-12-06 13:23:36'),
(3, NULL, 'authToken', 'LEnq8BOvpFKGC6ZMaZX3cGz0crDsddjRCMtmjPJ1', NULL, 'http://localhost', 1, 0, 0, '2020-12-06 13:31:45', '2020-12-06 13:31:45');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2020-12-06 13:23:35', '2020-12-06 13:23:35'),
(2, 3, '2020-12-06 13:31:46', '2020-12-06 13:31:46');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=>Incomplete, 1=>Complete',
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(36, 'New', 'New', 1, 1, '2020-12-06 07:21:41', '2020-12-06 07:22:38'),
(37, 'zdagb', 'xsdfbhn', 0, 1, '2020-12-06 07:48:18', '2020-12-06 07:48:18'),
(38, 'ttttttttttttt', 'ttttttttttttt', 0, 1, '2020-12-06 07:48:28', '2020-12-06 07:48:28'),
(39, 'Hello Project', 'Hello', 0, 1, '2020-12-06 09:25:30', '2020-12-06 09:25:30'),
(40, 'New Project', 'Hello Towheed', 0, 1, '2020-12-06 09:25:57', '2020-12-06 09:25:57'),
(41, 'Third', 'Hello Project', 0, 1, '2020-12-06 09:26:12', '2020-12-06 09:26:12');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=>Incomplete, 1=>Complete',
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `name`, `description`, `status`, `project_id`, `created_at`, `updated_at`) VALUES
(17, 'Md. Towheedul Islam', 'sdeg', 0, 36, '2020-12-06 07:22:00', '2020-12-06 07:44:35'),
(21, 'sDEGB', 'sdregh', 0, 36, '2020-12-06 07:40:46', '2020-12-06 07:44:34'),
(22, 'rdhdreh', 'dzrhzdrh', 0, 36, '2020-12-06 07:40:51', '2020-12-06 07:43:28'),
(23, 'SDGE', 'SEDG', 0, 36, '2020-12-06 07:41:13', '2020-12-06 07:43:00'),
(24, 'szdeg', 'szdreg', 0, 36, '2020-12-06 07:43:05', '2020-12-06 07:43:30'),
(25, 'sdhb', 'dzsrfh', 0, 36, '2020-12-06 07:43:19', '2020-12-06 07:43:19'),
(26, 'fffffffff', 'fffffffffff', 1, 36, '2020-12-06 07:43:40', '2020-12-06 07:44:45'),
(27, 'ddddddd', 'ddddddddddd', 0, 36, '2020-12-06 07:44:07', '2020-12-06 07:44:07'),
(28, 'xdfshb', 'dzfrh', 0, 36, '2020-12-06 07:44:39', '2020-12-06 07:44:39'),
(29, 'xdfbh', 'xfbh', 0, 38, '2020-12-06 07:48:38', '2020-12-06 07:48:38'),
(30, 'jjjjjjjj', 'jjjjjjjjj', 0, 38, '2020-12-06 07:48:44', '2020-12-06 08:20:43'),
(31, 'hhhh', 'hhhh', 0, 38, '2020-12-06 08:20:06', '2020-12-06 08:20:42'),
(32, 'cdfhndtfcg', 'cgjn', 0, 38, '2020-12-06 08:20:39', '2020-12-06 08:20:39'),
(33, 'New Project', 'Project Description', 0, 41, '2020-12-06 09:52:01', '2020-12-06 09:57:17'),
(34, 'Hello Project', 'Hello New', 0, 41, '2020-12-06 09:52:37', '2020-12-07 02:59:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Towheed', 'programmertowheed@gmail.com', NULL, '$2y$10$N2jeKiMeDx7Lv0NMWcUfqOn4iuBOoZXxVWmuIk0uJwhxK509c0lzC', NULL, '2020-11-30 04:46:17', '2020-11-30 04:46:17'),
(2, 'Towheed', 'towheed@gmail.com', NULL, '123456789', NULL, '2020-12-06 15:08:44', '2020-12-06 15:08:44'),
(3, 'Md Towheedul Islam', 'programmer@gmail.com', NULL, '123456789', NULL, '2020-12-06 15:50:34', '2020-12-06 15:50:34'),
(4, 'Md Towheedul Islam', 'admin@gmail.com', NULL, '123456789', NULL, '2020-12-06 16:11:01', '2020-12-06 16:11:01'),
(5, 'Md Towheedul Islam', 'programmertowheed1@gmail.com', NULL, '123456789', NULL, '2020-12-06 16:22:34', '2020-12-06 16:22:34'),
(6, 'Md Towheedul Islam', 'programmertowheed2@gmail.com', NULL, '123456789', NULL, '2020-12-06 16:24:01', '2020-12-06 16:24:01'),
(7, 'Md Towheedul Islam', 'programmertowheed3@gmail.com', NULL, '123456789', NULL, '2020-12-06 16:54:22', '2020-12-06 16:54:22'),
(8, 'Md Towheedul Islam', 'programmertowheed4@gmail.com', NULL, '123456789', NULL, '2020-12-07 01:41:08', '2020-12-07 01:41:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_user_id_foreign` (`user_id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tasks_project_id_foreign` (`project_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
