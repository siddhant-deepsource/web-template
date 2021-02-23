--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: make; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.make (
    id bigint NOT NULL,
    name character varying(300) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    modified_at timestamp with time zone NOT NULL
);


ALTER TABLE public.make OWNER TO postgres;

--
-- Name: make_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.make_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.make_id_seq OWNER TO postgres;

--
-- Name: make_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.make_id_seq OWNED BY public.make.id;


--
-- Name: make id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.make ALTER COLUMN id SET DEFAULT nextval('public.make_id_seq'::regclass);


--
-- Name: make make_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.make
    ADD CONSTRAINT make_name_key UNIQUE (name);


--
-- Name: make make_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.make
    ADD CONSTRAINT make_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

