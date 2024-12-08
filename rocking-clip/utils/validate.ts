import type { Clip, ClipFieldErrors } from '~/types';

// 클립 이름 유효성
export const validateClipName = (clipName: string): boolean => {
	return clipName.trim().length > 0;
};

// URL 유효성
export const validateClipPath = (clipPath: string): boolean => {
	const urlRegex = /^(https?:\/\/[^\s]+)/;
	return urlRegex.test(clipPath);
};

// 레벨 유효성
export const validateFavoriteLevel = (level: string): boolean => {
	const validLevels = ['1', '2', '3', '4', '5'];
	return validLevels.includes(level);
};

// 설명 유효성 (300자 제한)
export const validateDescription = (description: string): boolean => {
	if (!description) return false;
	return description.trim().length <= 300; // 최대 300자
};

// 전체 유효성 검사
export const validateClipData = (data: Clip): ClipFieldErrors => {
	const errors: ClipFieldErrors = {};

	if (!validateClipName(data.clipName)) {
		errors.clipName = '클립 이름은 필수입니다.';
	}

	if (!validateClipPath(data.clipPath)) {
		errors.clipPath = '유효한 클립 주소를 입력해주세요.';
	}

	if (!validateFavoriteLevel(data.favoriteLevel)) {
		errors.favoriteLevel = '클립 점수는 1에서 5 사이의 값이어야 합니다.';
	}

	if (!validateDescription(data.description)) {
		errors.description = '설명은 500자 이내여야 합니다.';
	}

	return errors;
};
