module.exports = class Model {
    static async User(Sequelize, sequelize) {
        return sequelize.define("users", {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            first_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            last_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            phone_number: {
                type: Sequelize.DataTypes.STRING(13),
                allowNull: true,
            },
            is_verified: {
                type: Sequelize.DataTypes.BOOLEAN,
                defaultVavalue: false,
                allowNull: false,
            },
            telegram_username: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true,
            },
            bio: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: true,
            },
            skills: {
                type: Sequelize.DataTypes.ARRAY,
                allowNull: true,
            },
            type: {
                type: Sequelize.DataTypes.ENUM("freelancer", "user"),
                allowNull: false,
            },
            languages: {
                type: Sequelize.DataTypes.ARRAY,
                allowNull: true,
            },
            skills: {
                type: Sequelize.DataTypes.ARRAY,
                allowNull: true,
            },
        });
    }
    static async Portfolio(Sequelize, sequelize) {
        return sequelize.define("portfolios", {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            photo: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            project_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            project_link: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
        });
    }
    static async Experience(Sequelize, sequelize) {
        return sequelize.define("experiences", {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            company_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            position: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            start_year: {
                type: Sequelize.DataTypes.STRING(4),
                allowNull: false,
            },
            start_month: {
                type: Sequelize.DataTypes.STRING(2),
                allowNull: false,
            },
            finish_year: {
                type: Sequelize.DataTypes.STRING(4),
                allowNull: true,
            },
            finish_month: {
                type: Sequelize.DataTypes.STRING(2),
                allowNull: true,
            },
            is_present: {
                type: Sequelize.DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            description: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: true,
            },
        });
    }
    static async Education(Sequelize, sequelize) {
        return sequelize.define("educations", {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            edu_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            edu_fac: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            start_year: {
                type: Sequelize.DataTypes.STRING(4),
                allowNull: false,
            },
            start_month: {
                type: Sequelize.DataTypes.STRING(2),
                allowNull: false,
            },
            finish_year: {
                type: Sequelize.DataTypes.STRING(4),
                allowNull: true,
            },
            finish_month: {
                type: Sequelize.DataTypes.STRING(2),
                allowNull: true,
            },
            description: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: true,
            },
        });
    }
    static async Language(Sequelize, sequelize) {
        return sequelize.define("languages", {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            degree: {
                type: Sequelize.DataTypes.ENUM(
                    "Beginner",
                    "Intermediate",
                    "Advanced"
                ),
                allowNull: false,
            },
            language: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
        });
    }
    static async Skill(Sequelize, sequelize) {
        return sequelize.define("skills", {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
        });
    }
    static async Board(Sequelize, sequelize) {
        return sequelize.define("boards", {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false,
            },
            phone_number: {
                type: Sequelize.DataTypes.STRING(13),
                allowNull: false,
            },
            budget: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            is_completed: {
                type: Sequelize.DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
        });
    }
    static async Message(Sequelize, sequelize) {
        return sequelize.define("messages", {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            phone_number: {
                type: Sequelize.DataTypes.STRING(13),
                allowNull: false,
            },
            message: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false,
            },
        });
    }
    static async Admin(Sequelize, sequelize) {
        return sequelize.define("admins", {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
        });
    }
    static async Sponsor(Sequelize, sequelize) {
        return sequelize.define("sponsors", {
            id: {
                type: Sequelize.DataTypes.UUID,
                defaultValue: Sequelize.DataTypes.UUIDV4,
                primaryKey: true,
            },
            logo: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            link: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
        });
    }
    static async Statistics(Sequelize, sequelize) {
        return sequelize.define("statistics", {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            in_search: {
                type: Sequelize.DataTypes.BIGINT,
                defaultValue: 0,
                allowNull: false,
            },
            projects_count: {
                type: Sequelize.DataTypes.BIGINT,
                defaultValue: 0,
                allowNull: false,
            },
            completed: {
                type: Sequelize.DataTypes.BIGINT,
                defaultValue: 0,
                allowNull: false,
            },
            hiring: {
                type: Sequelize.DataTypes.BIGINT,
                defaultValue: 0,
                allowNull: false,
            },
        });
    }
};
