CREATE TABLE IF NOT EXISTS "nextjsstarter_blogposts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"slug" varchar(300),
	"body" varchar,
	"img" varchar,
	"created_at" timestamp DEFAULT now(),
	"author" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nextjsstarter_users" (
	"username" varchar(50) PRIMARY KEY NOT NULL,
	"email" varchar(50),
	"password" varchar,
	"img" varchar,
	"is_admin" boolean DEFAULT false,
	CONSTRAINT "nextjsstarter_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "nextjsstarter_blogposts" ADD CONSTRAINT "nextjsstarter_blogposts_author_nextjsstarter_users_username_fk" FOREIGN KEY ("author") REFERENCES "public"."nextjsstarter_users"("username") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
