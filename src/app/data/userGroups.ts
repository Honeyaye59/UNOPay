import { Group } from "../models/groupModel";
import { groups } from "./groups";

const userId = 1;

export const userGroups: Group[] = groups.filter(group => group.membersId.some(memberId => memberId === userId));






