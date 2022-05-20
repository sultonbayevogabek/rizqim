DROP TABLE IF EXISTS "statistics" CASCADE;
DROP TABLE IF EXISTS "sponsors" CASCADE;
DROP TABLE IF EXISTS "admins" CASCADE;
DROP TABLE IF EXISTS "messages" CASCADE;
DROP TABLE IF EXISTS "boards" CASCADE;
DROP TABLE IF EXISTS "skills" CASCADE;
DROP TABLE IF EXISTS "languages" CASCADE;
DROP TYPE IF EXISTS "public"."enum_languages_degree";
DROP TABLE IF EXISTS "educations" CASCADE;
DROP TABLE IF EXISTS "experiences" CASCADE;
DROP TABLE IF EXISTS "portfolios" CASCADE;
DROP TABLE IF EXISTS "users" CASCADE;
DROP TYPE IF EXISTS "public"."enum_users_type";
DROP TABLE IF EXISTS "users" CASCADE;
DROP TYPE IF EXISTS "public"."enum_users_type";

SELECT t.typname enum_name, array_agg(e.enumlabel ORDER BY enumsortorder) enum_value FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace WHERE n.nspname = 'public' AND t.typname='enum_users_type' GROUP BY 1 DROP TYPE IF EXISTS "public"."enum_users_type";

CREATE TYPE "public"."enum_users_type" AS ENUM('freelancer', 'user');

CREATE TABLE IF NOT EXISTS "users" ("id" UUID , "first_name" VARCHAR(255) NOT NULL, "last_name" VARCHAR(255) NOT NULL, "email" VARCHAR(255) NOT NULL, "password" VARCHAR(255) NOT NULL, "avatar" VARCHAR(255) DEFAULT '/img/users/default.png', "phone_number" VARCHAR(13), "is_verified" BOOLEAN NOT NULL DEFAULT false, "telegram_username" VARCHAR(255), "web_site" VARCHAR(255), "git" VARCHAR(255), "bio" TEXT, "skills" VARCHAR(255)[], "type" "public"."enum_users_type" NOT NULL, "role" VARCHAR(255) DEFAULT 'user', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"));

SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'users' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

DROP TABLE IF EXISTS "portfolios" CASCADE;

CREATE TABLE IF NOT EXISTS "portfolios" ("id" UUID , "photo" VARCHAR(255) NOT NULL, "project_name" VARCHAR(255) NOT NULL, "project_link" VARCHAR(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("id"));

SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'portfolios' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

DROP TABLE IF EXISTS "experiences" CASCADE;
CREATE TABLE IF NOT EXISTS "experiences" ("id" UUID , "company_name" TEXT NOT NULL, "position" TEXT NOT NULL, "start_year" TEXT NOT NULL, "start_month" TEXT NOT NULL, "finish_year" TEXT, "finish_month" TEXT, "is_present" BOOLEAN NOT NULL DEFAULT false, "description" TEXT, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("id"));

SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'experiences' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

DROP TABLE IF EXISTS "educations" CASCADE;

CREATE TABLE IF NOT EXISTS "educations" ("id" UUID , "edu_name" VARCHAR(255) NOT NULL, "edu_fac" VARCHAR(255) NOT NULL, "start_year" VARCHAR(255) NOT NULL, "start_month" VARCHAR(255) NOT NULL, "finish_year" VARCHAR(255), "finish_month" VARCHAR(255), "description" TEXT, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("id"));

SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'educations' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

DROP TABLE IF EXISTS "languages" CASCADE;

DROP TYPE IF EXISTS "public"."enum_languages_degree";

SELECT t.typname enum_name, array_agg(e.enumlabel ORDER BY enumsortorder) enum_value FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace WHERE n.nspname = 'public' AND t.typname='enum_languages_degree' GROUP BY 1 DROP TYPE IF EXISTS "public"."enum_languages_degree"; CREATE TYPE "public"."enum_languages_degree" AS ENUM('Boshlang''ich', 'O''rta', 'Yuqori');

WITH ranges AS (  SELECT pg_range.rngtypid, pg_type.typname AS rngtypname, pg_type.typarray AS rngtyparray, pg_range.rngsubtype FROM pg_range LEFT OUTER JOIN pg_type ON pg_type.oid = pg_range.rngtypid)SELECT pg_type.typname, pg_type.typtype, pg_type.oid, pg_type.typarray,       ranges.rngtypname, ranges.rngtypid, ranges.rngtyparray  FROM pg_type LEFT OUTER JOIN ranges ON pg_type.oid = ranges.rngsubtype WHERE (pg_type.typtype IN('b', 'e'));

CREATE TABLE IF NOT EXISTS "languages" ("id" UUID , "degree" "public"."enum_languages_degree" NOT NULL, "language" VARCHAR(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("id"));

SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'languages' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

DROP TABLE IF EXISTS "skills" CASCADE;

CREATE TABLE IF NOT EXISTS "skills" ("id" UUID , "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"));

SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'skills' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

DROP TABLE IF EXISTS "boards" CASCADE;

CREATE TABLE IF NOT EXISTS "boards" ("id" UUID , "title" VARCHAR(255) NOT NULL, "description" TEXT NOT NULL, "img_url" VARCHAR(255) NOT NULL, "admin_telegram" VARCHAR(255) NOT NULL, "budget" VARCHAR(255) NOT NULL, "is_completed" BOOLEAN NOT NULL DEFAULT false, "applicants" VARCHAR(255)[] DEFAULT ARRAY[]::VARCHAR(255)[], "acceptance_data" VARCHAR(255) NOT NULL, "finish_data" VARCHAR(255) NOT NULL, "freelancer_id" VARCHAR(255), "project_link" VARCHAR(255), "materials_link" VARCHAR(255), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"));

SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'boards' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

DROP TABLE IF EXISTS "messages" CASCADE;

CREATE TABLE IF NOT EXISTS "messages" ("id" UUID , "name" VARCHAR(255) NOT NULL, "phone_number" VARCHAR(20) NOT NULL, "message" TEXT NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"));

SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'messages' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

DROP TABLE IF EXISTS "admins" CASCADE;

CREATE TABLE IF NOT EXISTS "admins" ("id" UUID , "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("id"));

SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'admins' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

DROP TABLE IF EXISTS "sponsors" CASCADE;

CREATE TABLE IF NOT EXISTS "sponsors" ("id" UUID , "logo" VARCHAR(255) NOT NULL, "link" VARCHAR(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"));

SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'sponsors' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

DROP TABLE IF EXISTS "statistics" CASCADE;

CREATE TABLE IF NOT EXISTS "statistics" ("id" UUID , "in_search" BIGINT NOT NULL DEFAULT 0, "projects_count" BIGINT NOT NULL DEFAULT 0, "completed" BIGINT NOT NULL DEFAULT 0, "hiring" BIGINT NOT NULL DEFAULT 0, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"));

SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'statistics' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

SELECT "id", "logo", "link", "createdAt", "updatedAt" FROM "sponsors" AS "sponsors";

SELECT "id", "title", "description", "img_url", "admin_telegram", "budget", "is_completed", "applicants", "acceptance_data", "finish_data", "freelancer_id", "project_link", "materials_link", "createdAt", "updatedAt" FROM "boards" AS "boards" WHERE "boards"."is_completed" = true;

SELECT "id", "title", "description", "img_url", "admin_telegram", "budget", "is_completed", "applicants", "acceptance_data", "finish_data", "freelancer_id", "project_link", "materials_link", "createdAt", "updatedAt" FROM "boards" AS "boards" WHERE "boards"."is_completed" = true LIMIT 10;

SELECT "id", "logo", "link", "createdAt", "updatedAt" FROM "sponsors" AS "sponsors";

SELECT "users".*, "portfolios"."id" AS "portfolios.id", "portfolios"."photo" AS "portfolios.photo", "portfolios"."project_name" AS "portfolios.project_name", "portfolios"."project_link" AS "portfolios.project_link", "portfolios"."createdAt" AS "portfolios.createdAt", "portfolios"."updatedAt" AS "portfolios.updatedAt", "portfolios"."user_id" AS "portfolios.user_id" FROM (SELECT "users"."id", "users"."first_name", "users"."last_name", "users"."email", "users"."password", "users"."avatar", "users"."phone_number", "users"."is_verified", "users"."telegram_username", "users"."web_site", "users"."git", "users"."bio", "users"."skills", "users"."type", "users"."role", "users"."createdAt", "users"."updatedAt" FROM "users" AS "users" WHERE "users"."type" = 'freelancer' LIMIT 10) AS "users" LEFT OUTER JOIN "portfolios" AS "portfolios" ON "users"."id" = "portfolios"."user_id";

SELECT "id", "title", "description", "img_url", "admin_telegram", "budget", "is_completed", "applicants", "acceptance_data", "finish_data", "freelancer_id", "project_link", "materials_link", "createdAt", "updatedAt" FROM "boards" AS "boards" WHERE "boards"."is_completed" = false;

SELECT "id", "title", "description", "img_url", "admin_telegram", "budget", "is_completed", "applicants", "acceptance_data", "finish_data", "freelancer_id", "project_link", "materials_link", "createdAt", "updatedAt" FROM "boards" AS "boards" WHERE "boards"."is_completed" = false LIMIT 10;
