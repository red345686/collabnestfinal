import { Document, Types } from 'mongoose';
export declare class Project extends Document {
    project_name: string;
    is_approved: boolean;
    description: string;
    is_completed: boolean;
    cap: number;
    start_date: Date;
    end_date: Date;
    project_applications: Types.ObjectId[];
    owner_id: Types.ObjectId;
}
export declare const ProjectSchema: import("mongoose").Schema<Project, import("mongoose").Model<Project, any, any, any, Document<unknown, any, Project> & Project & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Project, Document<unknown, {}, import("mongoose").FlatRecord<Project>> & import("mongoose").FlatRecord<Project> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
