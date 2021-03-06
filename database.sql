PGDMP                  
        z            ahmed    14.3    14.3 +               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16394    ahmed    DATABASE     i   CREATE DATABASE ahmed WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1256';
    DROP DATABASE ahmed;
                postgres    false                       0    0    DATABASE ahmed    ACL     &   GRANT ALL ON DATABASE ahmed TO ahmed;
                   postgres    false    3356            ?            1259    16397 
   migrations    TABLE     ?   CREATE TABLE public.migrations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    run_on timestamp without time zone NOT NULL
);
    DROP TABLE public.migrations;
       public         heap    postgres    false            ?            1259    16396    migrations_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.migrations_id_seq;
       public          postgres    false    210                       0    0    migrations_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;
          public          postgres    false    209            ?            1259    24743 
   orderitems    TABLE     ?   CREATE TABLE public.orderitems (
    id integer NOT NULL,
    quantity integer NOT NULL,
    orderid integer NOT NULL,
    productid integer NOT NULL
);
    DROP TABLE public.orderitems;
       public         heap    postgres    false            ?            1259    24742    orderitems_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.orderitems_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.orderitems_id_seq;
       public          postgres    false    218                       0    0    orderitems_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.orderitems_id_seq OWNED BY public.orderitems.id;
          public          postgres    false    217            ?            1259    24695    orders    TABLE     M   CREATE TABLE public.orders (
    id integer NOT NULL,
    user_id integer
);
    DROP TABLE public.orders;
       public         heap    postgres    false            ?            1259    24694    orders_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    216                        0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    215            ?            1259    24611    products    TABLE     ?   CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(70) NOT NULL,
    price integer NOT NULL,
    category character varying(18),
    "urlImage" text
);
    DROP TABLE public.products;
       public         heap    postgres    false            ?            1259    24610    products_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    214            !           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    213            ?            1259    24604    users    TABLE     ?   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100),
    username character varying(100),
    password character varying(100)
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    24603    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    212            "           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    211            p           2604    16400    migrations id    DEFAULT     n   ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
 <   ALTER TABLE public.migrations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            t           2604    24746    orderitems id    DEFAULT     n   ALTER TABLE ONLY public.orderitems ALTER COLUMN id SET DEFAULT nextval('public.orderitems_id_seq'::regclass);
 <   ALTER TABLE public.orderitems ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            s           2604    24698 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            r           2604    24614    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            q           2604    24607    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212                      0    16397 
   migrations 
   TABLE DATA           6   COPY public.migrations (id, name, run_on) FROM stdin;
    public          postgres    false    210   -                 0    24743 
   orderitems 
   TABLE DATA           F   COPY public.orderitems (id, quantity, orderid, productid) FROM stdin;
    public          postgres    false    218   ?-                 0    24695    orders 
   TABLE DATA           -   COPY public.orders (id, user_id) FROM stdin;
    public          postgres    false    216   %.                 0    24611    products 
   TABLE DATA           I   COPY public.products (id, name, price, category, "urlImage") FROM stdin;
    public          postgres    false    214   ?.                 0    24604    users 
   TABLE DATA           =   COPY public.users (id, name, username, password) FROM stdin;
    public          postgres    false    212   8/       #           0    0    migrations_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.migrations_id_seq', 9, true);
          public          postgres    false    209            $           0    0    orderitems_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.orderitems_id_seq', 37, true);
          public          postgres    false    217            %           0    0    orders_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.orders_id_seq', 36, true);
          public          postgres    false    215            &           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 47, true);
          public          postgres    false    213            '           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 44, true);
          public          postgres    false    211            v           2606    16402    migrations migrations_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.migrations DROP CONSTRAINT migrations_pkey;
       public            postgres    false    210            ~           2606    24748    orderitems orderitems_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.orderitems
    ADD CONSTRAINT orderitems_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.orderitems DROP CONSTRAINT orderitems_pkey;
       public            postgres    false    218            |           2606    24700    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    216            z           2606    24616    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    214            x           2606    24609    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    212            ?           2606    24749 "   orderitems orderitems_orderid_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.orderitems
    ADD CONSTRAINT orderitems_orderid_fkey FOREIGN KEY (orderid) REFERENCES public.orders(id);
 L   ALTER TABLE ONLY public.orderitems DROP CONSTRAINT orderitems_orderid_fkey;
       public          postgres    false    3196    218    216            ?           2606    24754 $   orderitems orderitems_productid_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.orderitems
    ADD CONSTRAINT orderitems_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(id);
 N   ALTER TABLE ONLY public.orderitems DROP CONSTRAINT orderitems_productid_fkey;
       public          postgres    false    214    218    3194                       2606    24701    orders orders_user_id_fkey    FK CONSTRAINT     y   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    212    3192    216               ?   x?e?;?0??????J??t*.@B:?<?OR?0?z????L?T?????i?4w??pئD5Q?Lq?,??)?I!N??u_?y-2???b??\]M?????6?'W?fڗ0????q"?Ks?Y???	???.[?<?釘"??9(7h???Q???         _   x?5???0?s\b?	?^??@ڹd?Hy????*???g??#=?+?S?b0?f>?`?+`!??Fv?=???F6r?4N?X??nx?lU??n%|         W   x?λ?0??W?$????Αֶ?k?h??v??]?nO??!?J?????? Ba???n?Fa?A??;? ??]g??S?         ?   x???M? ???p???ik?5??t???Ut?x}??ߓ??????	??&???874j??C+???Sϓ?iҾ?ۙu?_??@V?1????h?^?VR?????@?RV?[\g???b|xu??_?%ۭVU?R?ݖ?jm???۫T%?????????         ?  x?u??ҫHFח??5?.??	????G????????_??Չ?*?D&????/???t?????h?ࡑg?m_	]?i??DF(???#?=?@o????WD]?&???k?ϗ?6JAk??M??g?iR??ۥ}??
?l|??ŻL?h<??tFk???mO<?=l???w6?R??.??H?n?kW?ΪGTPee>@?	??.???@??w?&f?*?!S&?ͅ*(C??j?)?%0???K????vE?? ?7h???7?F?R?q?$??)??$??\?(x?oˤ??f??܆ԛ ??-ټ????j??
?2???S<έ?2K?̲r?,?J??+6??3????H?Ͼ?fޕɗ?;?*f8????<?!?4_N?箠d?vnf??O??_??`?|wg;+?S?6??E[J?:c?Z'?ΠvB[c?Kc?2??s??'??I??ߧ?????4m?['?????QN??hP^'?9G??^wZ?}?z??At>????xnGzF?{????d????TT?@??Dr*^????1L=??!??ƈ???+V???+xV?S??>????K}ļ?(?;"?YK?a??@Пi?]{???|N?8??J?Jh{?.?_?A??k?;J?E	??`?? ??L2?ma8҅g?ܬ?Nj????x???X????]ǽtO?7o?T??g?O@?s)ej???0_?ިd??P??X??@t?wv?;?<Ի? ?3-?G/ؖ'S??G?????0!??.OM'x?8?????m !??l?? m?????o???C"tgbx??ҷ????gr}@?*P?Ӛ?#?KYá?\A???>??f̷?f?
ұ,얎V01y듍??v?*߹????!?#n???d? ??D<m+?Q?{?L?5?C????"?g(?ii?`7????-{?^??????8Io??~~$?₠PHMQW?f`????ܣ?????|???Xp?V
??֎ȕ?F ??G?:????+?h?ﰒ? W??K,!}??,kW5???z?&???o.lrL?!????a?d??*4H?@+???r?ȉ?D4f?g???ͅ?ِ?'??Qc???f?4:??%^?D=	??Xg~W?ӌY?O ????p32)a?W?I=$?߸?mrf?[BY?Us˦ ??H?-???~q??O?ϹE7?????u?6?a?v(m[׮7????}.??i ???K?8繭:?a??8Ga1?????;?H;o??K???h?Q?@???%cW??N?aK?G???3??Xtu$P2????Z?Q???w^	>?
?₋YSޣ<l?????&)?n??2??????Ĳ?1?x?4M?e@???\S???O'~Ϫ???x???-ijs?A??? ??3X?ϧ?+ ?b9ٲ???=?????I>??\?2?V?Xvo??"?E?,a?R???v4???/"???{-?%?΍?{sn?T??????,ݑ?t????????????V??g??>ZcOE=iǎ?n7L8b?f???8?K5??}?????%?l????????K??,6㵺?q[??&$|4??`3???z??D???j?c????%i?uxfjbv??νM?U??/
t?<M?????vq8?>@?? ???c~7ew???cȂ?q?? ??$??kƜgb???????F#??»?,0?Ob#???=???? F?pMˣ(¿?2#u?????mxu?S?:????g@?Nj8?$??ؗ???3j?"2???&?w??1?󱈠?1:?V?????M?:???q?o ????$?????'hv??"??1.<??y???mT8)???	>	??5??b1?l{??ʢL$9<??ɟ?͙YK5?mM\-L?jO
=J???mi~3{????i?A??T??J?q#a???"????[^????N??R?>????7:Y????4?Ӕ A_?"????mPE?eu?ϊ?r??/????a???C??A?p?
^"b?ƺ~apE/?ӓ~QK?& ?????N??@  ?^??     