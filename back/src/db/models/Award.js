import { AwardModel } from "../schemas/award";

class Award {
    static create({ newAward }) {
        return AwardModel.create(newAward);
    }

    static findOneById({ awardId }) {
        return AwardModel.findOne({ id: awardId });
    }

    static findManyByUserId({ user_id }) {
        return AwardModel.find({ user_id });
    }

    static async updateOne({ user_id, awardId, title, description }) {
        const option = { returnOriginal: false };
        const updatedAward = await AwardModel.findOneAndUpdate(
            { id: awardId, user_id }, //
            { title, description },
            option,
        );
        return updatedAward;
    }

    static deleteOne({ awardId }) {
        return AwardModel.deleteOne({ id: awardId });
    }

    static deleteAll({ user_id }) {
        return AwardModel.deleteMany({ user_id });
    }

    // 수상 이력 중복 확인하기
    static findDuplicates({ user_id, title, description }) {
        return AwardModel.find({ user_id, title, description });
    }
}

export { Award };
