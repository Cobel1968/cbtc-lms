--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    slug text NOT NULL,
    name_en text NOT NULL,
    name_fr text
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- Name: student_profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student_profiles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    timeframe_prediction numeric(10,2),
    current_fluency_level text
);


ALTER TABLE public.student_profiles OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    email text NOT NULL,
    full_name text,
    role text DEFAULT 'student'::text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: vocational_lexicon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vocational_lexicon (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    course_id uuid,
    term_en text NOT NULL,
    term_fr text NOT NULL,
    difficulty_weight numeric(3,2) DEFAULT 1.0
);


ALTER TABLE public.vocational_lexicon OWNER TO postgres;

--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses (id, slug, name_en, name_fr) FROM stdin;
04591188-3838-4795-9938-7510a82d0096	trade-survival	Survival English for Trade	Anglais de Survie pour le Commerce
0bbd2c44-3564-44bc-bc78-8c41e81f3f2b	hospitality-esp	Hospitality & Customer Care Communication	Communication en H?tellerie et Service Client
d935f064-6e61-42e6-8581-3036af0b802f	asset-management	Professional Asset Management & Maintenance	Gestion des Actifs et Maintenance Professionnelle
\.


--
-- Data for Name: student_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student_profiles (id, user_id, timeframe_prediction, current_fluency_level) FROM stdin;
529fe186-cbac-4135-83b4-4452b2731966	d91d8343-da98-4851-8eb1-3472833b406f	38.25	Intermediate
d9f942b8-93b9-473c-9fc7-6be5524aa4e2	d91d8343-da98-4851-8eb1-3472833b406f	51.00	Intermediate
72b97d03-0a71-449b-9e14-f7367b6fed68	d91d8343-da98-4851-8eb1-3472833b406f	68.00	Intermediate
23c3d5a3-ce0e-472c-ae54-3c872ca776d6	9dfcba6b-41f0-4010-859c-cf756869c216	64.00	Advanced
c26ad131-8f59-4cce-b2c3-8818da30536e	8d6fd939-3b6e-4fa1-ae88-27b065e48d43	72.00	Intermediate
d1e7cea5-26e0-4984-8576-50021142bec6	b210ab04-805f-4f1c-a06c-a3a550530938	72.00	Transitioning
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, full_name, role) FROM stdin;
d91d8343-da98-4851-8eb1-3472833b406f	soro@cbtc-training.com	Mr. Soro	student
9dfcba6b-41f0-4010-859c-cf756869c216	kouassi@cbtc.com	A. Kouassi	student
8d6fd939-3b6e-4fa1-ae88-27b065e48d43	diallo@cbtc.com	M. Diallo	student
b210ab04-805f-4f1c-a06c-a3a550530938	traore@cbtc.com	S. Traore	student
\.


--
-- Data for Name: vocational_lexicon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vocational_lexicon (id, course_id, term_en, term_fr, difficulty_weight) FROM stdin;
298c2b97-f106-4175-ae48-bab37844ca06	0bbd2c44-3564-44bc-bc78-8c41e81f3f2b	Concierge Desk	Bureau de Conciergerie	1.20
8f165257-f443-44ee-83b9-ae08404d351b	0bbd2c44-3564-44bc-bc78-8c41e81f3f2b	Housekeeping	Service détage	1.00
963b77b0-7e80-420c-afac-f44213352e79	0bbd2c44-3564-44bc-bc78-8c41e81f3f2b	Occupancy Rate	Taux d'occupation	1.50
cb6cf7f0-9d19-4548-9df5-dba75dedc445	d935f064-6e61-42e6-8581-3036af0b802f	Facility Maintenance	Entretien des Bâtiments	1.40
3d235644-d91c-40bd-b0d0-ea5318df3686	d935f064-6e61-42e6-8581-3036af0b802f	Preventive Maintenance	Maintenance Préventive	1.30
\.


--
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- Name: courses courses_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_slug_key UNIQUE (slug);


--
-- Name: student_profiles student_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_profiles
    ADD CONSTRAINT student_profiles_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: vocational_lexicon vocational_lexicon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vocational_lexicon
    ADD CONSTRAINT vocational_lexicon_pkey PRIMARY KEY (id);


--
-- Name: student_profiles student_profiles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_profiles
    ADD CONSTRAINT student_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: vocational_lexicon vocational_lexicon_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vocational_lexicon
    ADD CONSTRAINT vocational_lexicon_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- PostgreSQL database dump complete
--

